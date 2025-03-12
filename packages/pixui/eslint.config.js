import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import eslintReactHook from 'eslint-plugin-react-hooks';
import unusedImport from 'eslint-plugin-unused-imports';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    {
        ignores: [
            'node_modules',
            'dist',
            'build',
            'coverage',
            'public',
            'vite.config.ts',
        ],
    },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
    importPlugin.flatConfigs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            'react-hooks': eslintReactHook,
            'unused-imports': unusedImport,
            'jsx-a11y': jsxA11y,
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                // You will also need to install and configure the TypeScript resolver
                // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
                typescript: true,
                node: true,
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    endOfLine: 'auto',
                },
            ],
            'consistent-return': 'off',
            'class-methods-use-this': 'off',
            'sort-imports': [
                'error',
                {
                    ignoreCase: true,
                    allowSeparatedGroups: true,
                    ignoreDeclarationSort: true,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: [
                        'none',
                        'all',
                        'multiple',
                        'single',
                    ],
                },
            ],
            'import/order': [
                1,
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always-and-inside-groups',
                },
            ],
            'tailwindcss/no-custom-classname': 'off',
            'tailwindcss/classnames-order': 'off',
            'import/extensions': 'off',
            'react/function-component-definition': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unsafe-function-type': 'off',
            'react/destructuring-assignment': 'off',
            'react/require-default-props': 'off',
            'react/jsx-props-no-spreading': 'off',
            '@typescript-eslint/comma-dangle': 'off',
            '@typescript-eslint/consistent-type-imports': 'error',
            'no-restricted-syntax': [
                'error',
                'ForInStatement',
                'LabeledStatement',
                'WithStatement',
            ],
            'import/prefer-default-export': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'no-unused-vars': 'off',
            'import/no-dynamic-require': 'warn',
            'import/no-nodejs-modules': 'warn',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
];
