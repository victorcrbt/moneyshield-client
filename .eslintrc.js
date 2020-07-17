module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/typescript',
  ],

  plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/Reactotron.ts'] },
    ],
    camelcase: 'off',
    'babel/no-unused-expressions': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        directory: '.',
      },
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      'babel-plugin-root-import': {
        paths: [
          {
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: '@components/',
            rootPathSuffix: 'src/components/',
          },
          {
            rootPathPrefix: '@store/',
            rootPathSuffix: 'src/store/',
          },
        ],
      },
    },
  },
};
