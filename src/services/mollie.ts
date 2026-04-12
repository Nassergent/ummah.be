/**
 * Mollie Payment Service — VOORBEREID, NIET ACTIEF
 *
 * Activeren:
 * 1. Voeg MOLLIE_API_KEY toe aan .env
 * 2. npm install @mollie/api-client
 * 3. Uncomment de createPayment functie
 * 4. Koppel aan steun-ons formulier
 */

// import { createMollieClient } from '@mollie/api-client';

export interface PaymentRequest {
  amount: string;      // "10.00"
  description: string; // "Waqf bijdrage - Ahmed"
  redirectUrl: string; // "https://ummah.be/bedankt"
  webhookUrl: string;  // "https://ummah.be/api/mollie-webhook"
  type: 'waqf' | 'programma';
  donorNaam: string;
  donorEmail: string;
}

export interface PaymentResult {
  id: string;
  checkoutUrl: string;
}

/**
 * NIET ACTIEF — Activeer wanneer VZW geregistreerd is en Mollie account klaar
 *
 * Gebruik:
 * const result = await createPayment({
 *   amount: "20.00",
 *   description: "Waqf bijdrage",
 *   redirectUrl: "https://ummah.be/bedankt",
 *   webhookUrl: "https://ummah.be/api/mollie-webhook",
 *   type: "waqf",
 *   donorNaam: "Ahmed",
 *   donorEmail: "ahmed@email.be"
 * });
 * // Redirect user to result.checkoutUrl
 */

/*
const mollieClient = createMollieClient({
  apiKey: import.meta.env.MOLLIE_API_KEY,
});

export async function createPayment(req: PaymentRequest): Promise<PaymentResult> {
  const payment = await mollieClient.payments.create({
    amount: { value: req.amount, currency: 'EUR' },
    description: req.description,
    redirectUrl: req.redirectUrl,
    webhookUrl: req.webhookUrl,
    metadata: {
      type: req.type,
      donorNaam: req.donorNaam,
      donorEmail: req.donorEmail,
    },
    method: ['bancontact', 'ideal', 'creditcard'],
  });

  return {
    id: payment.id,
    checkoutUrl: payment.getCheckoutUrl()!,
  };
}

export async function getPaymentStatus(paymentId: string) {
  return await mollieClient.payments.get(paymentId);
}
*/

// Placeholder export zodat het bestand importeerbaar is
export const MOLLIE_READY = false;
export const MOLLIE_INSTRUCTIONS = `
  Om Mollie te activeren:
  1. Registreer op mollie.com
  2. Voeg MOLLIE_API_KEY toe aan .env
  3. npm install @mollie/api-client
  4. Uncomment de code in src/services/mollie.ts
  5. Maak /api/mollie-webhook.ts aan
  6. Maak /api/create-payment.ts aan
`;
