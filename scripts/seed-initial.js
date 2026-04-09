/**
 * Seed initial Sanity data for Ummah.be Waqf
 * Singletons: siteSettings, homePage, waqfConfig
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';

const env = Object.fromEntries(
  readFileSync('.env', 'utf-8').split('\n')
    .filter(l => l && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);

const client = createClient({
  projectId: env.PUBLIC_SANITY_PROJECT_ID,
  dataset: env.PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2024-01-01',
  token: env.SANITY_WRITE_TOKEN,
});

const docs = [
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    organisatieNaam: 'Ummah.be Waqf',
    email: 'salam@ummah.be',
    fiscaleInfo: 'Donaties aan Ummah.be Waqf zijn momenteel nog niet fiscaal aftrekbaar in België. Zodra onze erkenning als filantropische instelling wordt toegekend, zullen donaties van €40 of meer een fiscaal attest opleveren (45% belastingvermindering).',
  },
  {
    _id: 'homePage',
    _type: 'homePage',
    heroTitle: 'Ummah.be Waqf',
    heroSubtitle: 'Kapitaal is heilig.\nOpbrengsten dienen moslims.\nVoor altijd.',
    heroDescription: 'Dit is geen organisatie. Dit is een waqf—een eeuwige instelling in dienst van Allah en de Ummah. Jouw bijdrage wordt heilig kapitaal dat nooit zal worden aangeraakt. Alleen de opbrengsten financieren mentorschap, educatie en gemeenschap.',
    heroButtonPrimaryLabel: 'Draag bij aan Kapitaal',
    heroButtonPrimaryLink: '/steun-ons',
    heroButtonSecondaryLabel: "Steun Programma's Deze Maand",
    heroButtonSecondaryLink: '/steun-ons',
    waqfUitlegTitle: 'Wat is een Waqf?',
    waqfUitlegText: 'Een waqf is een eeuwige gift. In Islam is dit een van de nobleste daden: je geeft kapitaal dat voor altijd dient, en de opbrengsten helpen anderen voor generaties. Dit is "sadaqah jariyah"—liefdadigheid die blijft stromen.',
    bismillah: true,
  },
  {
    _id: 'waqfConfig',
    _type: 'waqfConfig',
    doelKapitaal: 100000,
    huidigKapitaal: 0,
    verwachtRendement: 5,
    aantalDonoren: 0,
    maandelijkseDonoren: 0,
    minimumWaqfBijdrage: 1000,
    minimumProgramBijdrage: 10,
    toonIban: true,
    ibanTekst: 'U kunt ook rechtstreeks overschrijven naar ons rekeningnummer. Vermeld "Waqf Kapitaal" of "Program Support" als mededeling.',
    risicoDisclaimer: 'Let op: het verwachte rendement van 5% is een schatting op basis van historische data van shariah-conforme beleggingsfondsen. Werkelijke rendementen kunnen hoger of lager uitvallen. Het kapitaal wordt nooit aangeraakt, maar de jaarlijkse opbrengsten zijn niet gegarandeerd.',
    investeringsStrategie: 'Het waqf kapitaal wordt belegd in shariah-conforme indexfondsen (zoals iShares MSCI World Islamic UCITS ETF) onder toezicht van de Shariah Advisory Board. Geen rente, geen verboden sectoren (alcohol, gokken, wapens, conventionele financiële diensten).',
  },
];

console.log('Seeding Ummah.be Waqf initial data...\n');

for (const doc of docs) {
  try {
    await client.createOrReplace(doc);
    console.log('  ✓', doc._type, '—', doc._id);
  } catch (err) {
    console.error('  ✗', doc._id, ':', err.message);
  }
}

console.log('\n✅ Seed voltooid!');
