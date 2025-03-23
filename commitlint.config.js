module.exports = {
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?<type>[\p{Emoji_Presentation}]) (?<subject>.+)$/u,
      headerCorrespondence: ['type', 'subject'],
    },
  },
};
