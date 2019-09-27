## MOVED TO https://gitlab.com/competec-ch/frontend/eslint-config-competec

# eslint-config-competec

Competec ESLint Rules

## Installation

You'll first need to install [ESLint](http://eslint.org) with yarn:

```
$ yarn add eslint --dev
OR
$ npm i eslint --save-dev
```

Next, install `@competec/eslint-config-competec` with yarn:

```
$ yarn add @competec/eslint-config-competec --dev
OR
$ npm i @competec/eslint-config-competec --save-dev
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

If you want to use the config for your Reactapp, change it to the following:

```json
{
    "extends": [
        "@competec/eslint-config-competec/react"
    ]
}
```

Or for the use in tests to:

```json
{
    "extends": [
        "@competec/eslint-config-competec/test"
    ]
}
```
