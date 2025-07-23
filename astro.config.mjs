// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://datapuporg.github.io',
  output: 'static',

  build: {
    format: 'directory'
  },

  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true
    }
  },

  integrations: [svelte()]
});