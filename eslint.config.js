import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-plugin-prettier/config';

/** @type {import("eslint").Linter.FlatConfig} */

export default [
  prettierConfig,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'prettier/prettier': 'error',
    },
  },
];
