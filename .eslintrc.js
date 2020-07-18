module.exports = {
    extends: [ 'prettier' ],
    plugins: [ 'prettier', '@typescript-eslint' ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        eqeqeq: ['error', 'always'],
        'no-multi-spaces': 'warn',
        'require-await': 'error',
        'no-var': 'error',
        'prefer-const': 'warn',

        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
    },
}
