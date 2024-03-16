import { defineConfig } from 'vite';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Vite configuration
export default defineConfig({
  plugins: [
    replace({
      // Replace process.env.REACT_APP_* with the actual environment variable values
      preventAssignment: true,
      'process.env.REACT_APP_STRIPE_PUBLIC_KEY': JSON.stringify(process.env.REACT_APP_STRIPE_PUBLIC_KEY),
    }),
  ],
});


