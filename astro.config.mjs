import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkHeadingId from 'remark-heading-id';

export default defineConfig({
  site: 'https://ktmagency.ug',
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkHeadingId],
  },
});
