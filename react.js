/**
 * @fileoverview Competec ESLint Config for React Apps
 * @author Raphael Haettich / Competec
 */
'use strict';

//------------------------------------------------------------------------------
// Config Definition
//------------------------------------------------------------------------------


module.exports = {
    plugins: [
        'jsx-a11y',
    ],

    extends: [
        'plugin:jsx-a11y/recommended',
        'react-app',
        './src/base.js',
    ],

    rules: {
        'jsx-quotes': ['warn', 'prefer-double'],
        'react/sort-comp': 'error',
        'no-console': 'error',
        'react/prop-types': 'warn',
        'react/prefer-stateless-function': 'warn',
        'react/prefer-es6-class': ['error', 'always'],
        'react/default-props-match-prop-types': ['error', {allowRequiredDefaults: true}],
    },
};
