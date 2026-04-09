import { defineType, defineField } from 'sanity';

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team & Governance',
  type: 'document',
  fields: [
    defineField({ name: 'naam', title: 'Naam', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'rol',
      title: 'Rol',
      type: 'string',
      options: {
        list: [
          { title: '🛡️ Trustee (Mutawalli)', value: 'trustee' },
          { title: '📖 Shariah Board Scholar', value: 'scholar' },
          { title: '👤 Executive Director', value: 'director' },
          { title: '📋 Bestuurslid', value: 'board' },
        ],
        layout: 'radio',
      },
      validation: r => r.required(),
    }),
    defineField({ name: 'foto', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'titel', title: 'Functie / Titel', type: 'string', description: 'Bijv. "Imam bij Moskee X", "Entrepreneur"' }),
    defineField({ name: 'specialisatie', title: 'Specialisatie', type: 'string', description: 'Bijv. "Islamic Finance", "Quranic Studies"' }),
    defineField({ name: 'bio', title: 'Biografie', type: 'text', rows: 5 }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3, description: 'Persoonlijk citaat (italic weergave)' }),
    defineField({ name: 'email', title: 'E-mail', type: 'string' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'volgorde', title: 'Volgorde', type: 'number', initialValue: 0 }),
    defineField({ name: 'actief', title: 'Actief / Zichtbaar', type: 'boolean', initialValue: true }),
  ],
  orderings: [{ title: 'Volgorde', name: 'volgorde', by: [{ field: 'volgorde', direction: 'asc' }] }],
  preview: {
    select: { title: 'naam', subtitle: 'rol', media: 'foto' },
    prepare({ title, subtitle }) {
      const rolEmoji: Record<string, string> = { trustee: '🛡️', scholar: '📖', director: '👤', board: '📋' };
      return { title: `${rolEmoji[subtitle] || ''} ${title}`, subtitle };
    },
  },
});
