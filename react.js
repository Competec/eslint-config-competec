/**
 * @fileoverview Competec ESLint Config for React Apps
 * @author Raphael Haettich / Competec
 */
'use strict';

//------------------------------------------------------------------------------
// Config Definition
//------------------------------------------------------------------------------


module.exports = {
    extends: [
        './base.js',
        'react-app',
    ],

    rules: {
        'array-bracket-newline': ['off', 'consistent', {'multiline': true}],
        'array-element-newline': ['off', { 'multiline': true, 'minItems': 3 }],
        quotes: ['warn', 'single'],
        camelcase: 'off',
        'no-case-declarations': 'off',
        indent: ['warn', 4, {SwitchCase: 1}],
        'func-style': 'off',
        'func-call-spacing': ['warn', 'never'],
        'lines-between-class-members':['warn', 'always', { 'exceptAfterSingleLine': true }],
        'no-extra-semi': 'error',
        'no-debugger': 'warn',
        'no-process-env': 'off',
        'no-tabs': 'error',
        'comma-dangle': ['warn', 'always-multiline'],
        'no-extra-parens': [
            'warn',
            'all',
            {
                conditionalAssign: false,
                nestedBinaryExpressions: false,
                returnAssign: false,
                ignoreJSX: 'all',
            },
        ],
        'no-trailing-spaces': ['warn', {
            'skipBlankLines': false,
            'ignoreComments': false
        }],
        'jsx-quotes': ['warn', 'prefer-double'],
        'padded-blocks': ['warn','never'],
        'react/sort-comp': 'error',
        'react/prop-types': 'warn',
        'react/prefer-stateless-function': 'warn',
        'react/prefer-es6-class': ['error', 'always'],
        'react/default-props-match-prop-types': ['error', {allowRequiredDefaults: true}],
        'semi-style': ['error', 'last'],
    },
};
