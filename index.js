/**
 * @fileoverview Competec ESLint Config
 * @author Raphael Haettich / Competec
 */

//------------------------------------------------------------------------------
// Config Definition
//------------------------------------------------------------------------------

module.exports = {
    plugins: [
        'import',
    ],
    extends: [
        'eslint:recommended',
        './src/base.js',
        './src/globals.js',
        './src/parser.js',
        './src/environment.js',
    ],
};
