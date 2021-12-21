/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js'), // __dirname refers to parent directory's name
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // or [name].bundle.js or [name].[contenthash].js
    assetModuleFilename: 'assets/images/[name].[ext]', // agar nama asset foto dan media lainnya ketika diproduksi akan tetap sama dengan nama file aslinya (tidak menjadi hash)
    clean: true, // everytime we run webpack, it empties the dist folder and just leaves us the new files that just compiled
  },
  module: {
    rules: [
      {
        test: /\.(ico|webp|jpe?g|gif|png)$/,
        type: 'asset/resource'
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/temp.html'),
    }),
  ],
};
