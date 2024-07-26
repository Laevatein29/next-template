import config from '@antfu/eslint-config'

const arrayNewlineRules = [
  'error',
  {
    minItems: 3,
    multiline: true,
  },
]

export default config({
  'rules': {
    'style/jsx-curly-newline': ['error', 'consistent'],
    'style/jsx-first-prop-new-line': [2, 'always'],
    'style/jsx-closing-tag-location': 2,
    'style/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',

      },
    ],
    'style/jsx-newline': [
      'error',
      {
        prevent: false,
      },
    ],
    'style/jsx-function-call-newline': 'error',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
          minProperties: 3,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    'no-console': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'function',
          'expression',
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
  'no-multiple-empty-lines': [
    'error',
    {
      max: 2,
      maxBOF: 2,
      maxEOF: 2,
    },
  ],
})
