import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import prettierRules from './.prettierrc.cjs';

export default tseslint.config(
  {
    ignores: ['dist/*', 'coverage/*'],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': [2, prettierRules],
    },
  }
);
