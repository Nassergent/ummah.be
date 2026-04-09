import { defineType, defineField } from 'sanity';

export const donatieProject = defineType({
  name: 'donatieProject',
  title: 'Donatie Projecten',
  type: 'document',
  fields: [
    defineField({ name: 'titel', title: 'Project Titel', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titel', maxLength: 96 } }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: '🟢 Waqf Kapitaal', value: 'waqf' },
          { title: '🌿 Program Support', value: 'program' },
          { title: '🟠 Zakat', value: 'zakat' },
        ],
        layout: 'radio',
      },
      validation: r => r.required(),
    }),
    defineField({ name: 'beschrijving', title: 'Beschrijving', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'doelBedrag', title: 'Doelbedrag (€)', type: 'number' }),
    defineField({ name: 'huidigBedrag', title: 'Huidig Bedrag (€)', type: 'number', initialValue: 0 }),
    defineField({ name: 'afbeelding', title: 'Afbeelding', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'actief', title: 'Actief / Zichtbaar', type: 'boolean', initialValue: true }),
    defineField({ name: 'volgorde', title: 'Volgorde', type: 'number', initialValue: 0 }),
  ],
  orderings: [{ title: 'Volgorde', name: 'volgorde', by: [{ field: 'volgorde', direction: 'asc' }] }],
  preview: {
    select: { title: 'titel', subtitle: 'type', active: 'actief' },
    prepare({ title, subtitle, active }) {
      const typeEmoji: Record<string, string> = { waqf: '🟢', program: '🌿', zakat: '🟠' };
      return { title: `${active === false ? '🔴' : typeEmoji[subtitle] || ''} ${title}`, subtitle };
    },
  },
});
