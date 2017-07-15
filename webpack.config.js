module.exports = {
  entry: './src/index.js',
  output: {
    library: 'ReactRouterReduxFlash',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
