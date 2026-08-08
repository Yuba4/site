import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yuba4.com',
  integrations: [react()]
});
