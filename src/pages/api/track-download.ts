import type { APIRoute } from 'astro';
import { writeClient } from '../../../sanity/lib/client';

// Simple rate limiting: track IPs per ebook
const recentRequests = new Map<string, number>();

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { ebookId } = body;

    if (!ebookId || typeof ebookId !== 'string') {
      return new Response(JSON.stringify({ error: 'ebookId is verplicht' }), { status: 400 });
    }

    // Rate limiting: 1 call per IP per ebook per 10 seconds
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const key = `${ip}:${ebookId}`;
    const now = Date.now();
    const lastRequest = recentRequests.get(key);

    if (lastRequest && now - lastRequest < 10000) {
      return new Response(JSON.stringify({ ok: true, skipped: true }), { status: 200 });
    }
    recentRequests.set(key, now);

    // Cleanup old entries every 100 requests
    if (recentRequests.size > 500) {
      for (const [k, v] of recentRequests) {
        if (now - v > 60000) recentRequests.delete(k);
      }
    }

    // Increment download count in Sanity (fire-and-forget style but we await for reliability)
    await writeClient.patch(ebookId).inc({ downloadCount: 1 }).commit();

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('[track-download] Error:', (err as Error).message);
    // Don't fail the user experience — return OK even if tracking fails
    return new Response(JSON.stringify({ ok: true, tracked: false }), { status: 200 });
  }
};
