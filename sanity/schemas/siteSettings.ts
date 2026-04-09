import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Instellingen',
  type: 'document',
  groups: [
    { name: 'organisatie', title: '🏢 Organisatie', default: true },
    { name: 'contact', title: '📞 Contact' },
    { name: 'branding', title: '🎨 Branding' },
    { name: 'juridisch', title: '⚖️ Juridisch' },
    { name: 'socials', title: '🌐 Socials' },
  ],
  fields: [
    // Organisatie
    defineField({ name: 'organisatieNaam', title: 'Organisatie Naam', type: 'string', group: 'organisatie', initialValue: 'Ummah.be Waqf', validation: r => r.required() }),
    defineField({ name: 'kboNummer', title: 'KBO / Ondernemingsnummer', type: 'string', group: 'organisatie', description: 'Belgisch ondernemingsnummer (bijv. 0123.456.789)' }),
    defineField({ name: 'btwNummer', title: 'BTW Nummer', type: 'string', group: 'organisatie', description: 'Bijv. BE0123456789' }),
    defineField({ name: 'adres', title: 'Maatschappelijke Zetel', type: 'text', group: 'organisatie', rows: 3 }),
    defineField({ name: 'iban', title: 'IBAN Rekeningnummer', type: 'string', group: 'organisatie', description: 'Voor directe overschrijvingen (bijv. BE12 3456 7890 1234)' }),
    defineField({ name: 'bic', title: 'BIC Code', type: 'string', group: 'organisatie' }),

    // Contact
    defineField({ name: 'email', title: 'E-mail', type: 'string', group: 'contact', validation: r => r.required() }),
    defineField({ name: 'telefoon', title: 'Telefoon', type: 'string', group: 'contact' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Nummer', type: 'string', group: 'contact', description: 'Internationaal formaat: +32...' }),

    // Branding
    defineField({ name: 'logo', title: 'Logo (Header)', type: 'image', group: 'branding', options: { hotspot: true } }),
    defineField({ name: 'logoFooter', title: 'Logo (Footer — lichte versie)', type: 'image', group: 'branding', options: { hotspot: true } }),
    defineField({ name: 'favicon', title: 'Favicon', type: 'image', group: 'branding' }),
    defineField({ name: 'ogImage', title: 'Social Media Afbeelding (OG)', type: 'image', group: 'branding', description: '1200x630 pixels aanbevolen' }),

    // Juridisch
    defineField({ name: 'statutenPdf', title: 'VZW Statuten (PDF)', type: 'file', group: 'juridisch' }),
    defineField({ name: 'privacyBeleid', title: 'Privacybeleid', type: 'array', group: 'juridisch', of: [{ type: 'block' }] }),
    defineField({ name: 'cookieBeleid', title: 'Cookiebeleid', type: 'array', group: 'juridisch', of: [{ type: 'block' }] }),
    defineField({ name: 'fiscaleInfo', title: 'Fiscale Aftrekbaarheid Tekst', type: 'text', group: 'juridisch', rows: 4, description: 'Uitleg over belastingvoordeel voor donoren' }),

    // Socials
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url', group: 'socials' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url', group: 'socials' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url', group: 'socials' }),
    defineField({ name: 'twitter', title: 'X / Twitter URL', type: 'url', group: 'socials' }),
  ],
  preview: { prepare: () => ({ title: 'Site Instellingen' }) },
});
