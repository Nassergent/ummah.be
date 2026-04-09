import { defineType, defineField } from 'sanity';

export const hisabRapport = defineType({
  name: 'hisabRapport',
  title: 'Hisab Rapporten',
  type: 'document',
  groups: [
    { name: 'inkomsten', title: '💚 Inkomsten', default: true },
    { name: 'uitgaven', title: '🔴 Uitgaven' },
    { name: 'saldo', title: '📊 Saldo & Impact' },
    { name: 'publicatie', title: '📋 Publicatie' },
  ],
  fields: [
    defineField({ name: 'maand', title: 'Maand', type: 'date', group: 'inkomsten', validation: r => r.required(), description: 'Selecteer de eerste dag van de maand (bijv. 2026-04-01)' }),

    // Inkomsten
    defineField({ name: 'inkomstenWaqf', title: 'Waqf Kapitaal Ingekomen (€)', type: 'number', group: 'inkomsten', initialValue: 0 }),
    defineField({ name: 'inkomstenProgram', title: 'Program Support Ingekomen (€)', type: 'number', group: 'inkomsten', initialValue: 0 }),
    defineField({ name: 'inkomstenZakat', title: 'Zakat Ingekomen (€)', type: 'number', group: 'inkomsten', initialValue: 0 }),
    defineField({ name: 'inkomstenOverig', title: 'Overige Inkomsten (€)', type: 'number', group: 'inkomsten', initialValue: 0 }),

    // Uitgaven
    defineField({ name: 'uitgavenMentorship', title: 'Mentorship (€)', type: 'number', group: 'uitgaven', initialValue: 0 }),
    defineField({ name: 'uitgavenEbooks', title: 'E-books & Educatie (€)', type: 'number', group: 'uitgaven', initialValue: 0 }),
    defineField({ name: 'uitgavenWebsite', title: 'Website & Hosting (€)', type: 'number', group: 'uitgaven', initialValue: 0 }),
    defineField({ name: 'uitgavenCommunity', title: 'Community (€)', type: 'number', group: 'uitgaven', initialValue: 0 }),
    defineField({ name: 'uitgavenOperaties', title: 'Operationele Kosten (€)', type: 'number', group: 'uitgaven', initialValue: 0 }),
    defineField({ name: 'uitgavenOverig', title: 'Overige Uitgaven (€)', type: 'number', group: 'uitgaven', initialValue: 0 }),

    // Saldo & Impact
    defineField({ name: 'kapitaalEindestand', title: 'Waqf Kapitaal Eindestand (€)', type: 'number', group: 'saldo' }),
    defineField({ name: 'programFundEindestand', title: 'Program Fund Eindestand (€)', type: 'number', group: 'saldo' }),
    defineField({ name: 'zakatFundEindestand', title: 'Zakat Fund Eindestand (€)', type: 'number', group: 'saldo' }),
    defineField({ name: 'impactMentors', title: 'Mentors Gematcht', type: 'number', group: 'saldo', initialValue: 0 }),
    defineField({ name: 'impactEbooks', title: 'E-books Geproduceerd', type: 'number', group: 'saldo', initialValue: 0 }),
    defineField({ name: 'impactMentees', title: 'Actieve Mentees', type: 'number', group: 'saldo', initialValue: 0 }),

    // Publicatie
    defineField({ name: 'notities', title: 'Interne Notities', type: 'text', group: 'publicatie', rows: 4 }),
    defineField({ name: 'gepubliceerd', title: 'Gepubliceerd', type: 'boolean', group: 'publicatie', initialValue: false }),
    defineField({ name: 'pdfDownload', title: 'Hisab PDF', type: 'file', group: 'publicatie' }),
  ],
  orderings: [{ title: 'Maand (nieuwste eerst)', name: 'maandDesc', by: [{ field: 'maand', direction: 'desc' }] }],
  preview: {
    select: { title: 'maand', published: 'gepubliceerd' },
    prepare({ title, published }) {
      return { title: `${published ? '✅' : '⏳'} Hisab — ${title || 'Onbekend'}` };
    },
  },
});
