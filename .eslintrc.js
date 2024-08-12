module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.ts', '.tsx', '.d.ts', '.native'],
        map: [['@', './src/']],
      },
    },
  },
};
