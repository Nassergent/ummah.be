import { defineType, defineField } from 'sanity';

export const moskeeAanvraag = defineType({
  name: 'moskeeAanvraag',
  title: 'Moskee Aanvragen',
  type: 'document',
  fields: [
    defineField({ name: 'moskeeNaam', title: 'Moskee Naam', type: 'string' }),
    defineField({ name: 'stad', title: 'Stad', type: 'string' }),
    defineField({ name: 'contactpersoon', title: 'Contactpersoon', type: 'string' }),
    defineField({ name: 'email', title: 'E-mail', type: 'string' }),
    defineField({ name: 'telefoon', title: 'Telefoon', type: 'string' }),
    defineField({
      name: 'gevonden',
      title: 'Hoe gevonden',
      type: 'string',
      options: {
        list: [
          { title: 'Via een andere moskee', value: 'andere-moskee' },
          { title: 'Social media', value: 'social-media' },
          { title: 'Google', value: 'google' },
          { title: 'Mond-tot-mond', value: 'mond-tot-mond' },
          { title: 'Anders', value: 'anders' },
        ],
      },
    }),
    defineField({ name: 'bericht', title: 'Bericht', type: 'text', rows: 3 }),
    defineField({ name: 'datum', title: 'Datum', type: 'datetime' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Nieuw', value: 'nieuw' },
          { title: 'In behandeling', value: 'in-behandeling' },
          { title: 'Website gebouwd', value: 'website-gebouwd' },
        ],
        layout: 'radio',
      },
      initialValue: 'nieuw',
    }),
  ],
  orderings: [{ title: 'Datum', name: 'datum', by: [{ field: 'datum', direction: 'desc' }] }],
  preview: {
    select: { title: 'moskeeNaam', subtitle: 'stad', status: 'status' },
    prepare({ title, subtitle, status }) {
      const emoji: Record<string, string> = { nieuw: '\u{1F7E2}', 'in-behandeling': '\u{1F7E1}', 'website-gebouwd': '\u2705' };
      return { title: `${emoji[status] || ''} ${title}`, subtitle: subtitle || '' };
    },
  },
});
