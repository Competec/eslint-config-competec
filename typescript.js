/**
 * @fileoverview Competec ESLint Config for Typescript Apps
 */

//------------------------------------------------------------------------------
// Config Definition
//------------------------------------------------------------------------------

module.exports = {
    plugins: [
        '@typescript-eslint',
    ],
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
    ],
    files: [
        '*.ts',
        '*.tsx',
    ],
    parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
    },
    rules: {
        'no-inner-declarations': 'off',
        semi: 'off',
        'no-extra-parens': 'off',
        '@typescript-eslint/semi': [
            'error',
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
    },
    settings: {
        typescript: true,
        node: true,
    },
};
