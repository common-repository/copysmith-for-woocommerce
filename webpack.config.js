const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
};