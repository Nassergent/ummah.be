import { defineType, defineField } from 'sanity';

export const fatwa = defineType({
  name: 'fatwa',
  title: 'Fatwa',
  type: 'document',
  fields: [
    defineField({ name: 'scholarNaam', title: 'Scholar Naam', type: 'string', validation: r => r.required() }),
    defineField({ name: 'scholarTitel', title: 'Scholar Titel', type: 'string', description: 'Bijv. "Islamic Scholar, Imam bij Moskee X"' }),
    defineField({ name: 'datum', title: 'Datum', type: 'date' }),
    defineField({ name: 'inhoud', title: 'Fatwa Inhoud', type: 'array', of: [{ type: 'block' }], validation: r => r.required() }),
    defineField({ name: 'conclusie', title: 'Conclusie', type: 'text', rows: 4 }),
    defineField({ name: 'pdfDownload', title: 'PDF Download', type: 'file', description: 'Ondertekende fatwa als PDF' }),
  ],
  preview: { select: { title: 'scholarNaam', subtitle: 'datum' } },
});
