module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.ts', '.tsx', '.d.ts', '.native'],
        map: [
          ['@', './src/'],
          ['@home', './src/features/home/'],
        ],
      },
    },
  },
};
