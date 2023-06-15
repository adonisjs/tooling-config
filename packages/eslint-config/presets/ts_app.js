/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['@adonisjs/eslint-config/presets/ts_base', '@adonisjs/eslint-config/presets/prettier'],
  plugins: ['@adonisjs/eslint-plugin'],

  rules: {
    '@adonisjs/prefer-lazy-controller-import': 'error',
  },
}
