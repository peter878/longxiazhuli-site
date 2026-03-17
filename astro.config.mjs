import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://longxiazhuli.com',
  compressHTML: true,
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto'
  }
});
