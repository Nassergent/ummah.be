import { defineType, defineField } from 'sanity';

export const nieuwsPost = defineType({
  name: 'nieuwsPost',
  title: 'Nieuws',
  type: 'document',
  fields: [
    defineField({ name: 'titel', title: 'Titel', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titel', maxLength: 96 }, validation: r => r.required() }),
    defineField({ name: 'inhoud', title: 'Inhoud', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'samenvatting', title: 'Samenvatting', type: 'text', rows: 3, description: 'Kort overzicht voor de nieuwslijst' }),
    defineField({ name: 'afbeelding', title: 'Uitgelichte Afbeelding', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publicatieDatum', title: 'Publicatie Datum', type: 'datetime' }),
    defineField({ name: 'gepubliceerd', title: 'Gepubliceerd', type: 'boolean', initialValue: false }),
  ],
  orderings: [{ title: 'Datum (nieuwste eerst)', name: 'datumDesc', by: [{ field: 'publicatieDatum', direction: 'desc' }] }],
  preview: {
    select: { title: 'titel', subtitle: 'publicatieDatum', media: 'afbeelding', published: 'gepubliceerd' },
    prepare({ title, subtitle, media, published }) {
      return { title: `${published ? '' : '⏳ '} ${title}`, subtitle, media };
    },
  },
});
