const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const vendor = require('./vendor.ts');
const devMode = process.env.NODE_ENV !== 'production';

const config = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    })
  ],
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  mode: 'development',
  entry: { bundle: path.resolve(__dirname, 'src/index.tsx'), vendor: vendor }, // start point
  devtool: 'inline-source-map',
  output: {
    filename: 'js/[name].[contenthash].js', // output
    chunkFilename: 'js/[id].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: '/node_modules/'
      },
      {
        test: /\.(tsx?)$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, 'dist/css/')
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|wav|ico|mp3)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputPath: 'assets/'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    compress: true,
    open: true,
    historyApiFallback: true,
    port: 4000,
    client: { overlay: true, logging: 'info', reconnect: true }
  }
};

module.exports = config;
