module.exports = {
  extends: '@antfu/eslint-config',
  rules: {
    'semi': [
      'error',
      'always',
    ],
    'no-debugger': 'off',
    'no-restricted-syntax': 'off',
    'curly': 'off',
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/object-curly-spacing': [
      'error',
    ],
  },
};
