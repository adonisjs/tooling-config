/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    './ts_base.js',
    './prettier.js'
  ],
  plugins: ['@adonisjs/eslint-plugin'],

  rules: {
    '@adonisjs/prefer-lazy-controller-import': 'error',
  },
}
