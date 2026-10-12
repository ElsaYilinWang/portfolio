import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Relative URLs work for both repository Pages sites and a future custom domain.
export default defineConfig({ plugins: [react()], base: './' });
