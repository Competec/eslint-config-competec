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
        './base.js',
        './globals.js',
        './parser.js',
        './enviroment.js',
    ],
};
