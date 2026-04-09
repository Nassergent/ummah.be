// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ummah.be',
  output: 'server',
  integrations: [react()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    css: { transformer: 'lightningcss' },
  },
});
