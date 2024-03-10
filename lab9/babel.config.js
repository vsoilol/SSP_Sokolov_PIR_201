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
            src: './src',
            '@fonts': './src/assets/fonts',
            '@core': './src/core',
            '@assets': './src/assets',
            '@components': './src/components',
            '@my-types': './src/types',
            '@data': './src/data',
          },
        },
      ],
    ],
  };
};
