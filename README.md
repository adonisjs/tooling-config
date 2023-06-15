# AdonisJS configuration presets

## Introduction

This repository contains the tooling configuration presets for AdonisJS. That includes :

- ESLint configuration
- Prettier configuration
- TypeScript configuration

## Packages

- [@adonisjs/eslint-config](./packages/eslint-config) - ESLint configuration. Has actually two presets :
  - `@adonisjs/eslint-config/typescript-app` - For AdonisJS applications
  - `@adonisjs/eslint-config/typescript-package` - For AdonisJS packages
- [@adonisjs/eslint-plugin](./packages/eslint-plugin) - Our custom rules for ESLint. Included in the `@adonisjs/eslint-config` package.

- [@adonisjs/prettier-config](./packages/prettier-config/) - A simple prettier configuration.
- [@adonisjs/tsconfig](./packages/typescript-config/) - Typescript configuration for AdonisJS applications and packages.
  - `@adonisjs/tsconfig/tsconfig.base.json` - Common configuration for all projects.
  - `@adonisjs/tsconfig/node-esm.json` - Configuration for NodeJS ESM projects. Extends from `tsconfig.base.json`. Useful for AdonisJS 6 projects.
