import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/styles/utils/mixins';
        	@use '@/styles/utils/fonts';
        `,
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
