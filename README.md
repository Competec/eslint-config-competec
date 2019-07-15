# eslint-config-competec

Competec ESLint Rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add eslint --dev
```

Next, install `@competec/eslint-config-competec`:

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