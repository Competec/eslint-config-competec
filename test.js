/**
 * @fileoverview Competec ESLint Config for Tests
 * @author Raphael Haettich / Competec
 */
'use strict';

//------------------------------------------------------------------------------
// Config Definition
//------------------------------------------------------------------------------


module.exports = {
    extends: './index.js',

    globals: {
        logGlobalError: true,
        logger: true,
        CONFIG: true,
        CONST: true,
        $: true,
        jQuery: true,
        gtm: true,
        describe: true,
        it: true,
        expect: true,
        sinon: true,
        before: true,
        after: true,
        afterEach: true,
        beforeEach: true,
        R: true,
        stubElementOffsetHeight: true,
        mock: true,
        noop: true,
        stripSpecialCharacters: true,
        stubDomElementProperty: true,
    },

    rules: {
        'no-unused-expressions': 'off',
        'one-var': 'off',
        'comma-dangle': 'off',
        camelcase: 'off',
        'one-var-declaration-per-line': 'off',
    },
};
