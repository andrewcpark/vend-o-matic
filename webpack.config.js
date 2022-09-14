const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './client/index.js'),
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'dev server app',
      template: './index.html',
    }),
  ],
  devServer: {
    static: {
      directory: './dist/index.html',
    },
    port: 8080,
    proxy: {
      '/db/**': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css|\.scss|\.sass/gi,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};