import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://quantumbytech.com',
  // The site's CSS is small (about 9 KB), so it goes inside each page: no separate request blocks the first paint
  build: { inlineStylesheets: 'always' },
  // The meeting booking page is shared by link only, so it stays out of the sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/contact/meet') })],
});
