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

        'jsx-quotes': ['warn', 'prefer-double'],
        'react/sort-comp': 'error',
        'react/prop-types': 'warn',
        'react/prefer-stateless-function': 'warn',
        'react/prefer-es6-class': ['error', 'always'],
        'react/default-props-match-prop-types': ['error', {allowRequiredDefaults: true}],
    },
};
