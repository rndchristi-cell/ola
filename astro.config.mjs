import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ecclesiola.com',
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory'
  }
});