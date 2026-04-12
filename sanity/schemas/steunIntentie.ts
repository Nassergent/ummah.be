import { defineType, defineField } from 'sanity';

export const steunIntentie = defineType({
  name: 'steunIntentie',
  title: 'Steun Intenties',
  type: 'document',
  fields: [
    defineField({ name: 'naam', title: 'Naam', type: 'string' }),
    defineField({ name: 'email', title: 'E-mail', type: 'string' }),
    defineField({ name: 'bedrag', title: 'Bedrag', type: 'string' }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Waqf Kapitaal', value: 'waqf' },
          { title: 'Programma Steun', value: 'programma' },
        ],
        layout: 'radio',
      },
    }),
    defineField({ name: 'opmerkingen', title: 'Opmerkingen', type: 'text', rows: 3 }),
    defineField({ name: 'datum', title: 'Datum', type: 'datetime' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Nieuw', value: 'nieuw' },
          { title: 'Verwerkt', value: 'verwerkt' },
        ],
        layout: 'radio',
      },
      initialValue: 'nieuw',
    }),
  ],
  orderings: [{ title: 'Datum', name: 'datum', by: [{ field: 'datum', direction: 'desc' }] }],
  preview: {
    select: { title: 'naam', subtitle: 'type', bedrag: 'bedrag', status: 'status' },
    prepare({ title, subtitle, bedrag, status }) {
      const emoji: Record<string, string> = { nieuw: '\u{1F7E2}', verwerkt: '\u2705' };
      const typeLabel = subtitle === 'waqf' ? 'Waqf' : 'Programma';
      return { title: `${emoji[status] || ''} ${title}`, subtitle: `${typeLabel} — \u20AC${bedrag || '?'}` };
    },
  },
});
