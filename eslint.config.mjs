import babelParser from '@babel/eslint-parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import noConstructorBindPlugin from 'eslint-plugin-no-constructor-bind'

export default [
    {
        files: ['**/*.js', '**/*.jsx', '**/*.css'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['next/babel'],
                },
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            import: importPlugin,
            prettier: prettierPlugin,
            'no-constructor-bind': noConstructorBindPlugin,
        },
        rules: {
            'no-restricted-globals': ['error', 'event'],
            'no-bitwise': 'error',
            camelcase: ['error', { properties: 'never' }],
            curly: 'error',
            'guard-for-in': 'error',
            'no-extend-native': 'error',
            'wrap-iife': ['error', 'any'],
            indent: ['off', 4, { SwitchCase: 1 }],
            'linebreak-style': 'error',
            'comma-style': ['error', 'last'],
            'max-depth': ['error', 4],
            'new-cap': 'off',
            'no-caller': 'error',
            'no-empty': ['error', { allowEmptyCatch: true }],
            'no-irregular-whitespace': 'error',
            'no-new': 'error',
            strict: ['error', 'global'],
            'one-var': ['error', { initialized: 'never' }],
            'no-negated-condition': 'error',
            'vars-on-top': 'off',
            'no-magic-numbers': 'off',
            'no-shadow': 'off',
            'no-undef-init': 'error',
            'no-use-before-define': ['off', { functions: false }],
            'no-delete-var': 'error',
            eqeqeq: ['error', 'smart'],
            'no-console': ['error', { allow: ['time', 'timeEnd'] }],
            'no-constant-condition': 'error',
            'no-eval': 'error',
            'no-floating-decimal': 'error',
            'no-nested-ternary': 'error',
            'max-nested-callbacks': 2,
            'no-return-assign': 'error',
            'no-redeclare': 'error',
            'no-cond-assign': ['error', 'always'],
            'no-else-return': ['error', { allowElseIf: true }],
            'no-var': 'error',
            'arrow-body-style': ['error', 'as-needed'],
            'prefer-arrow-callback': ['error', { allowUnboundThis: true }],
            'no-extra-boolean-cast': 'error',
            'no-case-declarations': 'off',
            'no-param-reassign': 'off',
            'object-shorthand': ['error', 'always'],
            'no-dupe-class-members': 'error',
            'no-duplicate-imports': 'error',
            'no-unneeded-ternary': 'error',
            'no-useless-escape': 'error',

            // React rules
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react/jsx-wrap-multilines': 'error',
            'react/jsx-pascal-case': 'error',
            'react/no-deprecated': 'error',

            // Prettier rules
            'prettier/prettier': 'error',

            // Import rules
            'import/order': [
                'error',
                {
                    pathGroups: [{ pattern: 'react*', group: 'external', position: 'before' }],
                    pathGroupsExcludedImportTypes: ['builtin'],
                    'newlines-between': 'always',
                },
            ],

            'no-unused-vars': 'off',
            'prefer-const': 'error',
            'prefer-rest-params': 'error',
            'no-prototype-builtins': 'off',
            'require-atomic-updates': 'error',

            // React Hooks rules
            'react-hooks/exhaustive-deps': 'error',

            'no-import-assign': 'off',

            // No Constructor Bind rules
            'no-constructor-bind/no-constructor-bind': 'error',
            'no-constructor-bind/no-constructor-state': 'error',
        },
    },
]
