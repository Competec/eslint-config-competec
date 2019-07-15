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
    
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: false,
    },

    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'script',
    },

    extends: 'eslint:recommended',

    globals: {
        logGlobalError: true,
        logger: true,
        CONFIG: true,
        CONST: true,
        $: true,
        jQuery: true,
        gtm: true,
        environments: true,
        secureObject: true,
        utag: true,
        TMSHelper: true,
    },

    rules: {
        // Possible errors
        'comma-dangle': ['error', 'always-multiline'],
        'no-cond-assign': ['error', 'except-parens'],
        'no-console': 'warn',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'warn',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'off',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-negated-in-lhs': 'error',
        'no-obj-calls': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'off',
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',

        // Best practices
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'off',
        'consistent-return': 'error',
        curly: ['error', 'all'],
        'default-case': 'off',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        eqeqeq: 'error',
        'guard-for-in': 'off',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'off',
        'no-else-return': 'error',
        'no-empty-function': 'off',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'off',
        'no-invalid-this': 'off', // meh
        'no-iterator': 'error',
        'no-labels': ['error', {allowLoop: true}],
        'no-lone-blocks': 'error',
        'no-loop-func': 'off',
        'no-magic-numbers': 'off',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new': 'warn',
        'no-new-func': 'warn',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'off',
        'no-process-env': 'warn',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-return-assign': ['error', 'except-parens'],
        'no-script-url': 'off',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-with': 'error',
        radix: ['error', 'as-needed'],
        'vars-on-top': 'off',
        'wrap-iife': ['error', 'outside'],
        yoda: ['error', 'never'],

        // Strict Mode
        strict: ['error', 'safe'],

        // Variables
        'init-declarations': 'off',
        'no-catch-shadow': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': ['error', 'event'],
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-use-before-define': ['error', 'nofunc'],

        // Node.js and CommonJS
        'callback-return': 'off',
        'global-require': 'error',
        'handle-callback-err': 'error',
        'no-mixed-requires': ['error', true],
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-exit': 'error',
        'no-restricted-imports': 'off',
        'no-restricted-modules': 'off',
        'no-sync': 'off',

        // Stylistic Issues
        'array-bracket-spacing': ['warn', 'never'],
        'block-spacing': ['warn', 'always'],
        'brace-style': ['error', '1tbs', {allowSingleLine: false}],
        camelcase: ['error', {properties: 'always'}],
        'comma-spacing': ['error', {before: false, after: true}],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': 'off',
        'eol-last': 'error',
        'func-names': 'off',
        'func-style': 'off',
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'key-spacing': ['warn', {beforeColon: false, afterColon: true, mode: 'strict'}],
        'keyword-spacing': ['warn', {before: true, after: true}],
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': 'off',
        'max-len': ['warn', 180, {ignoreUrls: true}],
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements-per-line': ['error', {max: 1}],
        'new-cap': 'off',
        'new-parens': 'error',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': 'off',
        'no-array-constructor': 'error',
        'no-bitwise': 'off',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': 'error',
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-spaced-func': 'warn',
        'no-ternary': 'off',
        //    'no-trailing-spaces': 'warn',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'warn',
        'object-curly-spacing': ['warn', 'never'],
        'object-property-newline': 'off',
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'initializations'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never'],
        'quote-props': ['warn', 'as-needed'],
        quotes: ['error', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
        'require-jsdoc': 'off',
        semi: ['error', 'always'],
        'semi-spacing': 'error',
        'sort-imports': 'off',
        'sort-vars': 'off',
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', {anonymous: 'never', named: 'never'}],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'warn',
        'space-unary-ops': ['error', {words: true, nonwords: false}],
        //    'spaced-comment': ['error', 'always', { 'markers': ['///'] }],
        'wrap-regex': 'off',
        indent: ['error', 4, {SwitchCase: 1}],
        'no-unused-vars': [1, {vars: 'all', args: 'after-used'}],

        //complexity buster
        'max-statements': [2, 26],
        'max-depth': [1, 3],
        complexity: [2, 20],
        //es6 specific rules
        'arrow-parens': [2, 'always'],
        'arrow-spacing': 2,
        'constructor-super': 2,
        'generator-star-spacing': [2, {before: true, after: false}],
        'no-confusing-arrow': 0,
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-this-before-super': 2,
        'no-var': 2,
        'prefer-arrow-callback': 1,
        'prefer-spread': 1,
        'prefer-template': 1,
        'require-yield': 2,
    },
};
