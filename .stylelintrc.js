module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-recommended-scss', 'stylelint-config-recess-order'],
  ignoreFiles: ['node_modules/**', 'dist/**', 'public/**'],
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      customSyntax: 'postcss-jsx',
    },
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'else',
          'for',
          'each',
          'include',
          'mixin',
          'content',
          'use',
          'forward',
          'return',
          'apply',
          'layer',
          'responsive',
          'screen',
          'tailwind',
        ],
      },
    ],
    'function-name-case': ['lower', { ignoreFunctions: [/.*/] }],
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'export'] }],
    'no-descending-specificity': null,
    'rule-nested-empty-line-before': 'always',
  },
}
