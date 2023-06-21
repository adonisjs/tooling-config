# `@adonisjs/tsconfig`

The `@adonisjs/tsconfig` package exports the base TypeScript configuration for AdonisJS applications and packages.

## Installation

Install the package as a development dependency from the npm packages registry.

```sh
npm i -D @adonisjs/tsconfig

# For yarn lovers
yarn add -D @adonisjs/tsconfig

# For pnpm believers
pnpm add -D @adonisjs/tsconfig
```

## Usage

### AdonisJS Package

If you are creating an AdonisJS package, you must extend from the `tsconfig.package.json` file.

```jsonc
{
  "extends": "@adonisjs/tsconfig/tsconfig.package.json",
  "compilerOptions": {
    "rootDir": "./",
    "outDir": "./build"
  }
}
```

### AdonisJS applications

If you are creating an AdonisJS application, you must extend from the `tsconfig.app.json` file. AdonisJS starter kits does this by default.

```jsonc
{
  "extends": "@adonisjs/tsconfig/tsconfig.app.json",
  "compilerOptions": {
    "rootDir": "./",
    "outDir": "./build"
  }
}
```
