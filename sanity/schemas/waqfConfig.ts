import { defineType, defineField } from 'sanity';

export const waqfConfig = defineType({
  name: 'waqfConfig',
  title: 'Waqf Configuratie',
  type: 'document',
  groups: [
    { name: 'kapitaal', title: '💰 Kapitaal', default: true },
    { name: 'donaties', title: '🎁 Donatie Instellingen' },
    { name: 'investering', title: '📈 Investering' },
  ],
  fields: [
    defineField({ name: 'doelKapitaal', title: 'Doelkapitaal (€)', type: 'number', group: 'kapitaal', initialValue: 100000, validation: r => r.required().min(0) }),
    defineField({ name: 'huidigKapitaal', title: 'Huidig Kapitaal (€)', type: 'number', group: 'kapitaal', initialValue: 0, description: 'Handmatig bijwerken na elke donatie-cyclus' }),
    defineField({ name: 'verwachtRendement', title: 'Verwacht Rendement (%)', type: 'number', group: 'kapitaal', initialValue: 5, description: 'Geschat jaarlijks rendement op het kapitaal' }),
    defineField({ name: 'aantalDonoren', title: 'Aantal Donoren', type: 'number', group: 'kapitaal', initialValue: 0 }),
    defineField({ name: 'maandelijkseDonoren', title: 'Maandelijkse Donoren', type: 'number', group: 'kapitaal', initialValue: 0 }),

    defineField({ name: 'minimumWaqfBijdrage', title: 'Minimum Waqf Bijdrage (€)', type: 'number', group: 'donaties', initialValue: 1000 }),
    defineField({ name: 'minimumProgramBijdrage', title: 'Minimum Program Bijdrage (€)', type: 'number', group: 'donaties', initialValue: 10 }),
    defineField({ name: 'toonIban', title: 'Toon IBAN op Steun Pagina', type: 'boolean', group: 'donaties', initialValue: true }),
    defineField({ name: 'ibanTekst', title: 'IBAN Instructie Tekst', type: 'text', group: 'donaties', rows: 3, initialValue: 'U kunt ook rechtstreeks overschrijven naar ons rekeningnummer.' }),

    defineField({ name: 'investeringsStrategie', title: 'Investeringsstrategie', type: 'text', group: 'investering', rows: 6, description: 'Beschrijf hoe het kapitaal belegd wordt (bijv. shariah-conforme indexfondsen)' }),
    defineField({ name: 'risicoDisclaimer', title: 'Risico Disclaimer', type: 'text', group: 'investering', rows: 4, initialValue: 'Let op: het verwachte rendement is een schatting op basis van historische data. Werkelijke rendementen kunnen hoger of lager uitvallen. Kapitaal is niet gegarandeerd.' }),
  ],
  preview: { prepare: () => ({ title: 'Waqf Configuratie' }) },
});
