/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['./ts_base.js', './prettier.js'],

  plugins: ['jsonc', 'import'],

  overrides: [
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'description',
              'version',
              'private',
              'engines',
              'main',
              'type',
              'files',
              'bin',
              'exports',
              'imports',
              'scripts',
              'devDependencies',
              'dependencies',
              'optionalDependencies',
              'peerDependencies',
              'peerDependenciesMeta',
              'packageManager',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'types',
              'typesVersions',
              'icon',
              'activationEvents',
              'contributes',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
              'eslintIgnore',
              'prettier',
              'commitlint',
              'publishConfig',
              'np',
              'c8',
            ],
          },
        ],
      },
    },
  ],

  rules: {
    /**
     * Imports rules
     */
    'sort-imports': [
      'error',
      {
        // Declaration sorting is handled by `import/order` rule
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/newline-after-import': 'error',
  },
}
