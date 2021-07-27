const fs = require('fs');

module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/vue3-essential', '@vue/prettier', '@vue/typescript', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    rules: {
        'prettier/prettier': ['error', fs.readFileSync('.prettierrc.js')],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        camelcase: ['error'],
        'vue/comment-directive': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};
