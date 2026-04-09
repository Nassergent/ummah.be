import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Env helper — works in both Vite build (import.meta.env) and Node runtime (process.env)
function env(key: string, fallback = ''): string {
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key] as string;
  }
  try {
    // @ts-ignore
    return (import.meta.env?.[key] as string) || fallback;
  } catch {
    return fallback;
  }
}

const projectId = env('PUBLIC_SANITY_PROJECT_ID', 'dogai0iz');
const dataset = env('PUBLIC_SANITY_DATASET', 'production');
const readToken = env('SANITY_API_TOKEN');
const writeToken = env('SANITY_WRITE_TOKEN');

// CDN client — cached, fast reads (public pages)
export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2024-01-01',
  token: readToken,
});

// Fresh client — no cache, real-time (admin, settings)
export const freshClient = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-01-01',
  token: readToken,
});

// Write client — mutations (API routes only)
export const writeClient = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-01-01',
  token: writeToken,
});

// Image URL builder
const builder = imageUrlBuilder({ projectId, dataset });

export function urlFor(source: any) {
  return builder.image(source).auto('format').quality(80);
}
