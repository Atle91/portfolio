import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $types: path.resolve('./src/types'), // Alias for types
      $components: path.resolve('./src/components'), // Example for components
      $lib: path.resolve('./src/lib'), // Example for library code
    },
  },
});
