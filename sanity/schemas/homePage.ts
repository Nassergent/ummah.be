import { defineType, defineField } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', title: 'Hero Titel', type: 'string', initialValue: 'Ummah.be Waqf', validation: r => r.required() }),
    defineField({ name: 'heroSubtitle', title: 'Hero Ondertitel', type: 'text', rows: 3, initialValue: 'Kapitaal is heilig.\nOpbrengsten dienen moslims.\nVoor altijd.' }),
    defineField({ name: 'heroDescription', title: 'Hero Beschrijving', type: 'text', rows: 4 }),
    defineField({ name: 'heroButtonPrimaryLabel', title: 'Knop 1 — Label', type: 'string', initialValue: 'Draag bij aan Kapitaal' }),
    defineField({ name: 'heroButtonPrimaryLink', title: 'Knop 1 — Link', type: 'string', initialValue: '/steun-ons' }),
    defineField({ name: 'heroButtonSecondaryLabel', title: 'Knop 2 — Label', type: 'string', initialValue: "Steun Programma's Deze Maand" }),
    defineField({ name: 'heroButtonSecondaryLink', title: 'Knop 2 — Link', type: 'string', initialValue: '/steun-ons' }),
    defineField({ name: 'waqfUitlegTitle', title: 'Waqf Uitleg — Titel', type: 'string', initialValue: 'Wat is een Waqf?' }),
    defineField({ name: 'waqfUitlegText', title: 'Waqf Uitleg — Tekst', type: 'text', rows: 4 }),
    defineField({ name: 'videoUrl', title: 'Video URL (YouTube/Vimeo)', type: 'url' }),
    defineField({ name: 'bismillah', title: 'Toon Bismillah', type: 'boolean', initialValue: true, description: 'Toon "Bismillah ar-Rahman ar-Raheem" bovenaan de hero' }),
  ],
  preview: { prepare: () => ({ title: 'Homepage' }) },
});
