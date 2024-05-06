import config from '@antfu/eslint-config'
import airConfig from 'eslint-config-airbnb-base'

const arrayNewlineRules = ['error', { minItems: 3, multiline: true }]

export default [
  airConfig,
  config({
    rules: {
      'no-console': 'off',
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: [
            'const',
            'let',
            'var',
            'expression',
            'block',
            'block-like',
            'multiline-block-like',
          ],
          next: '*',
        },
        {
          blankLine: 'never',
          prev: '*',
          next: 'import',
        },
      ],
      'array-element-newline': arrayNewlineRules,
      'array-bracket-newline': arrayNewlineRules,
    },
  }),
]
