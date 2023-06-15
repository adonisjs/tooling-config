/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unicorn'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'no-public' },
        ],
      },
    },
  ],
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'temp',
    'build',
    'dist',
    'pnpm-lock.yaml',
    'yarn.lock',
    'package-lock.json',
    '__snapshots__',
    '!.github',
    '!.vscode',
  ],
  rules: {
    '@typescript-eslint/semi': [2, 'never'],
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    'no-irregular-whitespace': ['error'],
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: false,
        ignoredNodes: ['TSTypeParameterInstantiation'],
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'one-var': ['error', 'never'],
    'no-cond-assign': ['error', 'except-parens'],
    'comma-dangle': ['error', 'always-multiline'],
    'eqeqeq': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'new-parens': ['error', 'always'],
    'no-caller': ['error'],
    'no-constant-condition': ['error'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-duplicate-case': ['error'],
    'no-eval': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-fallthrough': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y'] }],
    'no-proto': ['error'],
    'no-shadow': ['off'],
    '@typescript-eslint/no-shadow': 'error',
    'no-regex-spaces': ['error'],
    'no-self-compare': ['error'],
    'no-sparse-arrays': ['error'],
    'no-mixed-spaces-and-tabs': ['error'],
    'no-unsafe-negation': ['error'],
    'no-new-wrappers': ['error'],
    'no-self-assign': ['error'],
    'no-this-before-super': ['error'],
    'no-with': ['error'],
    'rest-spread-spacing': ['error', 'never'],
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'no-undef-init': ['error'],
    'no-unsafe-finally': ['error'],
    'padded-blocks': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'use-isnan': ['error'],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'brace-style': ['error', '1tbs'],
    'curly': ['error', 'all'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    'handle-callback-err': ['error', '^(err|error)$'],
    'max-len': [
      'error',
      {
        code: 100,
        comments: 120,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-array-constructor': ['error'],
    'no-unreachable': ['error'],
    'no-multi-spaces': ['error'],
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'snakeCase',
      },
    ],
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/prefer-number-properties': 'error',
  },
}
