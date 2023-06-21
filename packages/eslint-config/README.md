# `@adonisjs/eslint-config`

The base configuration for ESLint used by AdonisJS applications and packages.

## Installation

Install the package as a development dependency from the npm packages registry.

```bash
npm i -D @adonisjs/eslint-config

# For yarn lovers
yarn add -D @adonisjs/eslint-config

# For pnpm believers
pnpm add -D @adonisjs/eslint-config
```

## Usage

Add the following rule to your eslint config file.

```json
{
  "extends": "@adonisjs/eslint-config/app"
}
```

If you are creating a package, then make sure to extend from the `package` config.

```json
{
  "extends": "@adonisjs/eslint-config/package"
}
```
