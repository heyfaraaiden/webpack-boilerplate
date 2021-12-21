/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'), // so that when we started writing command "npm run develop", devServer will automatically show file index.html in the dist folder
    open: true, // open browser when we start the dev
    hot: true,
    watchFiles: [path.resolve(__dirname, 'dist')],
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
