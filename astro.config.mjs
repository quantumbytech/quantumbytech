import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://quantumbytech.com',
  // The meeting booking page is shared by link only, so it stays out of the sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/contact/meet') })],
});
