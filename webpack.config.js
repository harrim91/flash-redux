module.exports = {
  entry: './src/index.js',
  output: {
    library: 'redux-flash',
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
