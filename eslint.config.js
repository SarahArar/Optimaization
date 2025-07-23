import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
    },
    rules: {
      'no-var': 'error', // Disallow var
      'no-unused-vars': 'error',
    },
  },

  // If you want to use pluginReact's new flat config too:
  pluginReact.configs.flat.recommended,
]);
