// module.exports = {
//   env: {
//     browser: true,
//     commonjs: true,
//     es2021: true,
//   },
//   extends: [
//     // 'airbnb',
//     // 'eslint:recommended',
//     // 'plugin:react/recommended',
//     // 'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended',
//     // "plugin:@typescript-eslint/recommended-requiring-type-checking",
//     // "plugin:@typescript-eslint/strict",
//   ],
//   root:true,
//   overrides: [
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     project: true,
//     tsconfigRootDir: __dirname,
//   },
//   parser: '@typescript-eslint/parser',
//   plugins: [
//     // 'react',
//     // '@typescript-eslint',
//     // 'tsconfig',
//   ],
//   rules: {
//     // "@typescript-eslint/explicit-function-return-type": "error",
//     // "@typescript-eslint/explicit-member-accessibility": "error",
//     // "@typescript-eslint/explicit-module-boundary-types": "error",
//     // "@typescript-eslint/no-empty-function": "error",
//     // "@typescript-eslint/no-explicit-any": "error",
//     // "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
//     // "@typescript-eslint/no-var-requires": "error"
//   },
// };

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    /* necessary otherwise lints all react jsx */
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
  },
  plugins: [],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/extensions': ['error', { jsx: 'always' }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true },
    ],
    'react/prop-types': 'off',
  },
};
