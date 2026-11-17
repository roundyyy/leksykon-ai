import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://roundyyy.github.io',
  base: '/leksykon-ai',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // kompresja zjadała spacje między tekstem a linkami w akapitach
  compressHTML: false,
  devToolbar: { enabled: false },
});
