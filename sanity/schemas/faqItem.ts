import { defineType, defineField } from 'sanity';

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'vraag', title: 'Vraag', type: 'string', validation: r => r.required() }),
    defineField({ name: 'antwoord', title: 'Antwoord', type: 'array', of: [{ type: 'block' }], validation: r => r.required() }),
    defineField({
      name: 'categorie', title: 'Categorie', type: 'string',
      options: { list: [
        { title: 'Waqf', value: 'waqf' },
        { title: 'Donaties', value: 'donaties' },
        { title: 'Governance', value: 'governance' },
        { title: 'Algemeen', value: 'algemeen' },
      ]},
    }),
    defineField({ name: 'volgorde', title: 'Volgorde', type: 'number', initialValue: 0 }),
    defineField({ name: 'gepubliceerd', title: 'Gepubliceerd', type: 'boolean', initialValue: true }),
  ],
  orderings: [{ title: 'Volgorde', name: 'volgorde', by: [{ field: 'volgorde', direction: 'asc' }] }],
  preview: { select: { title: 'vraag', subtitle: 'categorie' } },
});
