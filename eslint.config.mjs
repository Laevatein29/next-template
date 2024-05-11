import config from '@antfu/eslint-config'

const arrayNewlineRules = ['error', { minItems: 3, multiline: true }]

export default config({
  'rules': {
    'no-console': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var',
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
    'spaced-comment': ['error', 'always'],
  },
  'no-trailing-spaces': 'off',
  'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 2 }],
})
