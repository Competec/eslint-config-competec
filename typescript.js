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
    parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
    },
    settings: {
        typescript: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            extends: [
                'plugin:@typescript-eslint/recommended',
            ],
            files: [
                '*.ts',
                '*.tsx',
            ],
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
        },
    ],
};
