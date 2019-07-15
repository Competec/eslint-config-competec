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
        './index.js',
        'react-app'
    ],

    rules: {
        "quotes": ["warn", "single"],
    "camelcase": "off",
    "no-case-declarations": "off",
    "indent": ["warn", 4, { "SwitchCase": 1 }],
    "func-style": "off",
    "no-extra-semi": "warn",
    "no-debugger": "warn",
    "no-process-env": "off",
    "comma-dangle": ["warn", "always-multiline"],
    "no-extra-parens": [
      "warn",
      "all",
      {
        "conditionalAssign": false,
        "nestedBinaryExpressions": false,
        "returnAssign": false,
        "ignoreJSX": "all"
      }
    ],
    "jsx-quotes": ["warn", "prefer-double"],
    "react/sort-comp": "error",
    "react/prop-types": "warn",
    "react/prefer-stateless-function": "warn",
    "react/prefer-es6-class": ["error", "always"],
    "react/default-props-match-prop-types": ["error", { "allowRequiredDefaults": true }]
    }
};
