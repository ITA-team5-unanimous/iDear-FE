const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'revert',
        'chore',
        'security',
        'ui',
      ],
    ],
    'subject-case': [
      2,
      'always',
      [
        'sentence-case',
        'start-case',
        'pascal-case',
        'lower-case',
        'upper-case',
        'kebab-case',
      ],
    ],
  },
};

module.exports = Configuration;
