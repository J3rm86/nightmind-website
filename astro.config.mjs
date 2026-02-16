// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nightmind.ai',
  // Remove trailing slashes for clean URLs
  trailingSlash: 'never',
  build: {
    // Output format for static site
    format: 'file'
  }
});
