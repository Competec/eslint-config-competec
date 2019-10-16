/**
 * @fileoverview Competec ESLint Config
 * @author Raphael Haettich / Competec
 */
'use strict';

//------------------------------------------------------------------------------
// Config Definition
//------------------------------------------------------------------------------


module.exports = {
    parser: 'babel-eslint',

    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'script',
    },

    extends: [
        'eslint:recommended',
        './base.js',
        './globals.js',
        './enviroment.js',
    ],
};
