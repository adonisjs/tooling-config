# `@adonisjs/tsconfig`

In TypeScript, the configuration file can extend from a base file. This package provided a few common base configuration files to simplify TypeScript project setup.

## Installation

```sh
pnpm add -D @adonisjs/tsconfig
```

## Usage

### AdonisJS Package

Used for AdonisJS packages. Extend from `tsconfig.base.json` :

```jsonc
{
  "extends": "@adonisjs/tsconfig/tsconfig.package.json",
  "compilerOptions": {
    //
  }
}
```

### AdonisJS apps

Used for AdonisJS apps. Extend from `tsconfig.base.json` :

```jsonc
{
  "extends": "@adonisjs/tsconfig/tsconfig.app.json",
  "compilerOptions": {
    //
  }
}
```
