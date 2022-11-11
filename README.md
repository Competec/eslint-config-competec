[![pipeline status](https://gitlab.com/competec-opensource/eslint-config-competec/badges/master/pipeline.svg)](https://gitlab.com/competec-opensource/eslint-config-competec/commits/master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![NPM version](https://img.shields.io/npm/v/@competec/eslint-config-competec.svg?style=flat)](https://www.npmjs.com/package/@competec/eslint-config-competec)
[![NPM downloads](https://img.shields.io/npm/dt/@competec/eslint-config-competec.svg?style=flat)](https://www.npmjs.com/package/@competec/eslint-config-competec)

# eslint-config-competec

Competec ESLint Rules

## Installation

You'll first need to install [ESLint](http://eslint.org) with yarn:

```
$ yarn add eslint --dev
```

Next, install `@competec/eslint-config-competec` with yarn:

```
$ yarn add @competec/eslint-config-competec --dev
```

## Usage

Create a file named .eslintrc.json with following contents in the root folder of your project:

```json
{
    "extends": [
        "@competec/eslint-config-competec"
    ]
}
```

For the use with react, change it to the following:

```json
{
    "extends": [
        "@competec/eslint-config-competec/react"
    ]
}
```

For the use with typescript, change it to the following:

```json
{
    "extends": [
        "@competec/eslint-config-competec/typescript"
    ]
}
```
For the use with flow, change it to the following:

```json
{
    "extends": [
        "@competec/eslint-config-competec/flow"
    ]
}
```

For the use in tests, change it to the following:

```json
{
    "extends": [
        "@competec/eslint-config-competec/test"
    ]
}
```

## Developer Information

Please use the `yarn commit` command to add commit with the correct formatting.

