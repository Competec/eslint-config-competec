/**
 * @fileoverview Competec ESLint Config for Typescript Apps
 */

//------------------------------------------------------------------------------
// Config Definition
//------------------------------------------------------------------------------

module.exports = {
    parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
    },
    settings: {
        typescript: true,
        node: true,
        'import/resolver': {
            typescript: true,
            node: true,
        },
    },
    overrides: [
        {
            parser: '@typescript-eslint/parser',
            extends: [
                // Error: Not uniquely imported, also gets imported by eslint-config-react-app
                // 'plugin:@typescript-eslint/recommended',
                'plugin:import/recommended',
                'plugin:import/typescript',
            ],
            files: [
                '*.ts',
                '*.tsx',
            ],
            rules: {
                'import/no-named-as-default': 'off',
                'import/no-named-as-default-member': 'off',

                'no-inner-declarations': 'off',
                semi: 'off',
                'no-extra-parens': 'off',
                '@typescript-eslint/semi': [
                    'error',
                ],
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/member-delimiter-style': 'off',

                '@typescript-eslint/ban-ts-ignore': 'off',
                '@typescript-eslint/ban-ts-comment': 'off',

                'flowtype/no-types-missing-file-annotation': 'off',

                // Disabled due to incorrect errors https://typescript-eslint.io/rules/no-use-before-define/#how-to-use
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': 'error',

                '@typescript-eslint/no-import-type-side-effects': 'error',

                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': 'off',

                // needs to be removed in the future: https://stackoverflow.com/questions/64170868/why-eslint-consider-jsx-or-some-react-types-undefined-since-upgrade-typescript
                'no-undef': 'off',

                // https://typescript-eslint.io/rules/no-shadow/#how-to-use
                'no-shadow': 'off',
                '@typescript-eslint/no-shadow': 'error',

                'import/order': [
                    'error',
                    {
                        alphabetize: {
                            order: 'asc',
                            caseInsensitive: false,
                        },
                        pathGroups: [
                            {
                                pattern: '{react,react-dom}',
                                group: 'builtin',
                                position: 'before',
                            },
                            {
                                pattern: '{jest-axe,enzyme,react-dom/test-utils}',
                                group: 'builtin',
                                position: 'after',
                            },
                            {
                                pattern: '*storybook*',
                                group: 'builtin',
                                position: 'after',
                            },
                            {
                                pattern: '{@competec/**,b2c-components/**,b2c-resources/**}',
                                group: 'external',
                                position: 'after',
                            },
                        ],
                        pathGroupsExcludedImportTypes: [],
                        groups: [
                            'builtin',
                            'external',
                            'parent',
                            'sibling',
                            'index',
                            'type',
                        ],
                    },
                ],
                'import/newline-after-import': 'error',
            },
        },
    ],
};
