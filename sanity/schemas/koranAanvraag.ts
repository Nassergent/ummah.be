import { defineType, defineField } from 'sanity';

export const koranAanvraag = defineType({
  name: 'koranAanvraag',
  title: 'Koran Aanvragen',
  type: 'document',
  fields: [
    defineField({ name: 'naam', title: 'Naam', type: 'string', validation: r => r.required() }),
    defineField({ name: 'email', title: 'E-mail', type: 'string' }),
    defineField({ name: 'adres', title: 'Straat + Huisnummer', type: 'string', validation: r => r.required() }),
    defineField({ name: 'postcode', title: 'Postcode', type: 'string', validation: r => r.required() }),
    defineField({ name: 'stad', title: 'Stad', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'reden',
      title: 'Reden',
      type: 'string',
      options: {
        list: [
          { title: 'Ik ben nieuwsgierig', value: 'nieuwsgierig' },
          { title: 'Ik ben een nieuwe moslim', value: 'nieuwe-moslim' },
          { title: 'Ik wil het als cadeau geven', value: 'cadeau' },
          { title: 'Anders', value: 'anders' },
        ],
      },
    }),
    defineField({ name: 'opmerkingen', title: 'Opmerkingen', type: 'text', rows: 3 }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: '🟢 Nieuw', value: 'nieuw' },
          { title: '📦 Verzonden', value: 'verzonden' },
          { title: '❌ Geannuleerd', value: 'geannuleerd' },
        ],
        layout: 'radio',
      },
      initialValue: 'nieuw',
    }),
    defineField({
      name: 'datum',
      title: 'Aanvraagdatum',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  orderings: [
    { title: 'Nieuwste eerst', name: 'datumDesc', by: [{ field: 'datum', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'naam', subtitle: 'stad', status: 'status', datum: 'datum' },
    prepare({ title, subtitle, status }) {
      const statusEmoji: Record<string, string> = { nieuw: '🟢', verzonden: '📦', geannuleerd: '❌' };
      return {
        title: `${statusEmoji[status] || '⚪'} ${title}`,
        subtitle: `${subtitle} — ${status}`,
      };
    },
  },
});
