import type { APIRoute } from 'astro';
import { writeClient } from '../../../sanity/lib/client';

// Rate limiting: max 3 requests per IP per hour
const requestLog = new Map<string, number[]>();

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { naam, email, adres, postcode, stad, reden, opmerkingen, website } = body;

    // Honeypot check — "website" field is hidden, bots fill it in
    if (website) {
      // Silently reject — don't tell the bot it failed
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // Validate required fields
    if (!naam || !adres || !postcode || !stad) {
      return new Response(
        JSON.stringify({ error: 'Naam, adres, postcode en stad zijn verplicht.' }),
        { status: 400 }
      );
    }

    // Rate limiting: max 3 per IP per hour
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const hourAgo = now - 3600000;
    const ipRequests = (requestLog.get(ip) || []).filter(t => t > hourAgo);

    if (ipRequests.length >= 3) {
      return new Response(
        JSON.stringify({ error: 'Te veel aanvragen. Probeer het later opnieuw.' }),
        { status: 429 }
      );
    }
    ipRequests.push(now);
    requestLog.set(ip, ipRequests);

    // Cleanup old entries
    if (requestLog.size > 200) {
      for (const [k, v] of requestLog) {
        if (v.every(t => t < hourAgo)) requestLog.delete(k);
      }
    }

    // Sanitize input
    const sanitize = (s: string) => s.replace(/[<>]/g, '').trim().slice(0, 500);

    // Create document in Sanity
    await writeClient.create({
      _type: 'koranAanvraag',
      naam: sanitize(naam),
      email: email ? sanitize(email) : undefined,
      adres: sanitize(adres),
      postcode: sanitize(postcode),
      stad: sanitize(stad),
      reden: reden || undefined,
      opmerkingen: opmerkingen ? sanitize(opmerkingen) : undefined,
      status: 'nieuw',
      datum: new Date().toISOString(),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('[koran-aanvraag] Error:', (err as Error).message);
    return new Response(
      JSON.stringify({ error: 'Er is een fout opgetreden. Probeer het later opnieuw.' }),
      { status: 500 }
    );
  }
};
