import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'dogai0iz';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

// CDN client — cached, fast reads (public pages)
export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2024-01-01',
  token: import.meta.env.SANITY_API_TOKEN,
});

// Fresh client — no cache, real-time (admin, settings)
export const freshClient = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-01-01',
  token: import.meta.env.SANITY_API_TOKEN,
});

// Write client — mutations (API routes only)
export const writeClient = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-01-01',
  token: import.meta.env.SANITY_WRITE_TOKEN,
});

// Image URL builder
const builder = imageUrlBuilder({ projectId, dataset });

export function urlFor(source: any) {
  return builder.image(source).auto('format').quality(80);
}
