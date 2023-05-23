module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue-i18n/recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  // check if imports actually resolve
  settings: {
    'vue-i18n': {
      localeDir: './src/popup/locales/*.json',
    },
  },
  // add your custom rules here
  rules: {
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
      ],
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'error',
    'no-underscore-dangle': 'off',
    'no-confusing-arrow': 'off',
    'import/prefer-default-export': 'off',
    'vue-i18n/no-dynamic-keys': 'warn',
    'vue-i18n/no-unused-keys': 'error',
    'vue-i18n/no-missing-keys': 'off',
    'vue-i18n/no-raw-text': 'off',
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: [
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
