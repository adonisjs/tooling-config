# `@adonisjs/tsconfig`

In TypeScript, the configuration file can extend from a base file. This package provided a few common base configuration files to simplify TypeScript project setup.

## Installation

```sh
pnpm add -D @adonisjs/tsconfig
```

## Usage

### All projects

The base configuration file is `tsconfig.base.json`. It contains the common configuration for all projects. You can extend from this file and add your own configuration.

```jsonc
{
  "extends": "@adonisjs/tsconfig/tsconfig.base.json",
  "compilerOptions": {
    //
  }
}
```

### Node.JS ESM project

For a NodeJS ESM project, extend from `node-esm.json` :

```jsonc
{
  "extends": "@adonisjs/tsconfig/node-esm.json",
  "compilerOptions": {
    "outDir": "./build"
  }
}
```
