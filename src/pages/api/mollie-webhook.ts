import type { APIRoute } from 'astro';

/**
 * Mollie Webhook — VOORBEREID, NIET ACTIEF
 * Wordt aangeroepen door Mollie wanneer een betaling statuswijziging heeft.
 * Activeren samen met src/services/mollie.ts
 */
export const POST: APIRoute = async ({ request }) => {
  // TODO: Activeer wanneer Mollie live gaat
  // 1. Ontvang payment ID van Mollie
  // 2. Verifieer betaling via mollieClient.payments.get()
  // 3. Update Sanity document status
  // 4. Stuur bevestigingsmail via Resend

  console.log('[mollie-webhook] Webhook ontvangen maar Mollie is nog niet actief');
  return new Response('OK', { status: 200 });
};
