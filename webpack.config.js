const path = require('path');

module.exports = {
  devtool: 'source-map',
  // <!-- Feel free to change webpack's point of entry if need be --!>
  entry: path.join(__dirname, 'client', 'index.js'),
  // <!-- If you change the output, make sure you change the reference in the Index.html --!>
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
