/**
 * @fileoverview Competec ESLint Config for React Apps
 * @author Raphael Haettich / Competec
 */

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
        'react/prefer-stateless-function': 'warn',
        'react/prefer-es6-class': ['error', 'always'],
        'react/default-props-match-prop-types': 'off',
        'react/prop-types': 'off',
        'no-new': 'off',
        'template-curly-spacing': 'off',
        indent: 'off',
        'react-hooks/exhaustive-deps': 'off',
    },
};
