import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig((configEnv: { command: 'build' | 'serve' }) => ({
  base: configEnv.command === 'build' ? '/job-task/' : '/',
  plugins: [react()],
}));
