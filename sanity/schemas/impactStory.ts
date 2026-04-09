import { defineType, defineField } from 'sanity';

export const impactStory = defineType({
  name: 'impactStory',
  title: 'Impact Stories',
  type: 'document',
  fields: [
    defineField({ name: 'titel', title: 'Titel', type: 'string', validation: r => r.required() }),
    defineField({ name: 'verhaal', title: 'Verhaal', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'persoon', title: 'Persoon', type: 'string', description: 'Naam of anoniem (bijv. "Ahmad, 34 jaar")' }),
    defineField({ name: 'rol', title: 'Rol', type: 'string', description: 'Bijv. "Mentee", "Donor", "Vrijwilliger"' }),
    defineField({ name: 'foto', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gepubliceerd', title: 'Gepubliceerd', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { title: 'titel', subtitle: 'persoon', media: 'foto' } },
});
