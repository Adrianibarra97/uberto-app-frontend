// eslint.config.js
import reactRefresh    from 'eslint-plugin-react-refresh';
import reactHooks      from 'eslint-plugin-react-hooks';
import tsPlugin        from '@typescript-eslint/eslint-plugin';
import vitestPlugin    from 'eslint-plugin-vitest';

const { configs: tsConfigs }    = tsPlugin;
const { configs: hooksConfigs } = reactHooks;
const { configs: vitestConfigs } = vitestPlugin;

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'eslint.config.*'],

    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },

    env: {
      browser: true,
      es2021: true,
      node: true
    },

    plugins: {
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks
    },

    rules: {
      // Básicas y TS
      ...tsConfigs.recommended.rules,

      // React Hooks
      ...hooksConfigs.recommended.rules,

      // React Refresh: solo exportar componentes
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  },

  {
    // Override para tests
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'],

    env: {
      'vitest/globals': true,
      browser: true,
      es2021: true
    },

    plugins: {
      vitest: vitestPlugin
    },

    rules: {
      // Reglas recomendadas de Vitest
      ...vitestConfigs.recommended.rules,

      // Ajustes extra de pruebas
      'vitest/max-expects': 'warn',
      'vitest/no-focused-tests': 'error'
    }
  }
];