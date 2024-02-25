'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 9090,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
      { test: /\.scss$/, use: 'css-loader' },
      { test: /\.jsx?$/, use: 'babel-loader' },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer",'@babel/plugin-syntax-jsx'
                ]
              },
              presets: [
                '@babel/preset-env',
                '@babel/react'
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
