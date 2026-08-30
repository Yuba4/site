import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import { d1, r2 } from '@emdash-cms/cloudflare';
import emdash from 'emdash/astro';

export default defineConfig({
  site: 'https://yuba4.com',
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    react(),
    emdash({
      database: d1({ binding: 'DB' }),
      storage: r2({ binding: 'MEDIA' })
    })
  ]
});
