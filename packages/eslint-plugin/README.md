# `@adonisjs/eslint-plugin`

ESLint plugin to enforce AdonisJS specific linting rules. Following is the list of available rules.

- `prefer-lazy-controller-import`: Enforces and auto fixes standard HTTP controller imports inside the routes file to lazy imports. Lazy imports improves the application load time.
- `prefer-lazy-listener-import`: Enforces and auto fixes standard event listener imports inside the events file to lazy imports. Lazy imports improves the application load time.

## Installation

Install the package as a development dependency from the npm packages registry.

```bash
npm i -D @adonisjs/eslint-plugin

# For yarn lovers
yarn add -D @adonisjs/eslint-plugin

# For pnpm believers
pnpm add -D @adonisjs/eslint-plugin
```

## Usage

Add the following rule to your eslint config file.

```js
{
  plugins: ['@adonisjs/eslint-plugin'],
  rules: {
    '@adonisjs/prefer-lazy-controller-import': 'error',
    '@adonisjs/prefer-lazy-listener-import': 'error',
  },
}
```
