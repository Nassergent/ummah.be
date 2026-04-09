import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schema';
import { structure } from './sanity/structure';

export default defineConfig({
  name: 'ummah-be',
  title: 'Ummah.be Waqf — Admin',
  projectId: 'dogai0iz',
  dataset: 'production',
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
