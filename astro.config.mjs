import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://comeinphotostudio.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});