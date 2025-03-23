module.exports = {
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  },
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(?<type>[\p{Emoji}\p{Emoji_Component}\p{Emoji_Modifier_Base}\p{Emoji_Modifier}]+) (?<subject>.+)$/u,
      headerCorrespondence: ['type', 'subject'],
    },
  },
};
