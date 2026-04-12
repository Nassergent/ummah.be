import type { APIRoute } from 'astro';
import { writeClient } from '../../../sanity/lib/client';

const rateLimit = new Map<string, number>();

export const POST: APIRoute = async ({ request }) => {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const last = rateLimit.get(ip) || 0;
    if (now - last < 30000) {
      return new Response(JSON.stringify({ error: 'Te veel verzoeken. Probeer later opnieuw.' }), { status: 429 });
    }
    rateLimit.set(ip, now);

    // CSRF: Origin check
    const origin = request.headers.get('origin') || '';
    if (origin && !origin.includes('ummah') && !origin.includes('localhost') && !origin.includes('vercel')) {
      return new Response(JSON.stringify({ error: 'Niet toegestaan.' }), { status: 403 });
    }

    const data = await request.json();

    // Honeypot check
    if (data.website) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // Validation
    if (!data.moskeeNaam || !data.stad || !data.contactpersoon || !data.email || !data.telefoon) {
      return new Response(JSON.stringify({ error: 'Vul alle verplichte velden in.' }), { status: 400 });
    }

    // Sanitize
    const clean = (s: string) => s.replace(/[<>]/g, '').slice(0, 500);

    await writeClient.create({
      _type: 'moskeeAanvraag',
      moskeeNaam: clean(data.moskeeNaam),
      stad: clean(data.stad),
      contactpersoon: clean(data.contactpersoon),
      email: clean(data.email),
      telefoon: clean(data.telefoon),
      gevonden: clean(data.gevonden || ''),
      bericht: clean(data.bericht || ''),
      datum: new Date().toISOString(),
      status: 'nieuw',
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('[api/moskee-aanvraag] Error:', (err as Error).message);
    return new Response(JSON.stringify({ error: 'Er ging iets mis. Probeer later opnieuw.' }), { status: 500 });
  }
};
