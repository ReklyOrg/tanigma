import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    extends: [js.configs.recommended, tseslint.configs.recommended, reactRefresh.configs.vite],
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    name: 'Files',
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
    },
    name: 'Options',
    settings: { react: { version: 'detect' } },
  },
  {
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat['jsx-runtime'],
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs.flat['jsx-runtime'].rules,
      'arrow-body-style': ['error', 'as-needed'],
      'react/display-name': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
        },
      ],
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-sort-props': 'warn',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/no-danger': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-string-refs': 'error',
      'react/no-unknown-property': 'error',
      'react/prefer-es6-class': 'error',
      'react/prefer-stateless-function': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/self-closing-comp': 'error',
      'react/sort-prop-types': 'warn',
    },
  },
  {
    files: ['**/**/*.{js,ts,jsx,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // React
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // 'no-unused-vars': 'off',
      // or
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  jsxA11y.flatConfigs.recommended,
  {
    ...eslintPluginUnicorn.configs.recommended,
    rules: {
      ...eslintPluginUnicorn.configs.recommended.rules,

      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
          ignore: [/^(?:.*\/)*routes\/.*\.(js|ts|jsx|tsx)$/],
        },
      ],
      'unicorn/no-null': ['off'],
      'unicorn/no-useless-undefined': ['off'],
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            args: false,
            prop: false,
            props: false,
            ref: false,
          },
        },
      ],
    },
  },
  {
    name: 'Custom rules',
    rules: {
      '@typescript-eslint/no-use-before-define': ['error'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-useless-computed-key': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-template': 'error',
      'sort-keys': ['warn', 'asc', { natural: true }],
    },
  },
  // Needs to be at the end of all rules
  eslintConfigPrettier,
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '**/generated/**', '**/routeTree.gen.ts', 'cypress/**'],
    name: 'Files/folders to ignore',
  },
]);
