const babelParser = require('@babel/eslint-parser')

module.exports = [
    {
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
        rules: {
            'linebreak-style': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
]
