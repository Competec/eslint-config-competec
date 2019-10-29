/**
 * @fileoverview Competec ESLint Config
 * @author Raphael Haettich / Competec
 */
'use strict';

//------------------------------------------------------------------------------
// Config Definition
//------------------------------------------------------------------------------

module.exports = {
    extends: [
        'eslint:recommended',
        './src/base.js',
        './src/globals.js',
        './src/parser.js',
        './src/environment.js',
        './src/flow.js',
    ],
};
