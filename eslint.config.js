import { fileURLToPath } from 'node:url'

import prettier from 'eslint-config-prettier'
import js from '@eslint/js'
import { includeIgnoreFile } from '@eslint/compat'
import svelte from 'eslint-plugin-svelte'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'
import ts from 'typescript-eslint'

import svelteConfig from './svelte.config.js'

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url))

export default ts.config(
    includeIgnoreFile(gitignorePath),
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs.recommended,
    prettier,
    ...svelte.configs.prettier,
    importPlugin.flatConfigs.recommended,
    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }
        },
        rules: {
            // Style
            semi: ['error', 'never'],
            indent: ['error', 4],
            quotes: ['error', 'single'],
            'comma-dangle': ['error', 'never'],

            // JavaScript best practices
            eqeqeq: ['error', 'always'],
            'no-console': 'warn',
            'no-unused-vars': 'off', // dùng bản của typescript-eslint

            // Clean code (optional)
            'max-lines': ['warn', 300],
            'max-params': ['warn', 4],
            complexity: ['warn', 10],
            'no-magic-numbers': [
                'warn',
                {
                    ignore: [0, 1, -1],
                    ignoreArrayIndexes: true,
                    enforceConst: true
                }
            ]
        }
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off'
        }
    },
    {
        files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
        languageOptions: {
            parserOptions: {
                projectService: true,
                extraFileExtensions: ['.svelte'],
                parser: ts.parser,
                svelteConfig
            }
        },
        rules: {
            // Svelte rules
            'svelte/indent': [
                'error',
                {
                    indent: 4,
                    ignoredNodes: [],
                    switchCase: 1,
                    alignAttributesVertically: false
                }
            ],
            'svelte/html-closing-bracket-spacing': [
                'error',
                {
                    startTag: 'never',
                    endTag: 'never',
                    selfClosingTag: 'always'
                }
            ],
            'svelte/first-attribute-linebreak': [
                'error',
                {
                    singleline: 'beside',
                    multiline: 'below'
                }
            ],
            'svelte/no-at-html-tags': 'warn',
            'svelte/no-reactive-functions': 'warn'
        }
    },
    {
        rules: {
            'import/no-unresolved': 'off',
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always'
                }
            ]
        }
    }
)
