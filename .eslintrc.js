module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 0,
    'no-console': 0,
    'implicit-arrow-linebreak': 0,
    'react/jsx-props-no-spreading': 0,
    // 'react/prop-types': [2, { ignore: ['children', 'theme'] }],
    'react/prop-types': 0,
    'react/destructuring-assignment': [0],
    'react/state-in-constructor': 0,
    'react/no-did-update-set-state': [0],
    'no-nested-ternary': [0],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-shadow': 0,
    'max-len': [
      2,
      {
        code: 100,
      },
    ],
    'jsx-a11y/anchor-is-valid': 0,
    'no-confusing-arrow': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'class-methods-use-this': 0,
  },
};