module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            },
            typescript: {
                alwaysTryTypes: true,
                project: ['./tsconfig.json']
            }
        }
    }
};
