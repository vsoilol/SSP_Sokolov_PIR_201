module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
          root: ['.'],
          alias: {
            '@core': './src/core',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@components': './src/components',
            '@my-types': './src/types',
            '@hooks': './src/hooks',
            src: './src',
          },
        },
      ],
    ],
  };
};
