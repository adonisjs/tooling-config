# `@adonisjs/prettier-config`

The `@adonisjs/prettier-config` package exports the base configuration for Prettier used by AdonisJS applications and packages.

## Installation

Install the package as a development dependency from the npm packages registry.

```bash
npm i -D @adonisjs/prettier-config

# For yarn lovers
yarn add -D @adonisjs/prettier-config

# For pnpm believers
pnpm add -D @adonisjs/prettier-config
```

## Usage

To enable these rules, add a `prettier` property in your `package.json` and reference this shared config as follows:

```json
{
  "prettier": "@adonisjs/prettier-config"
}
```
