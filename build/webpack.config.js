const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MZQiniuUploadWebpackPlugin = require('mz-qiniu-upload-webpack-plugin');

const PUBLISH_CONFIG = require('./PUBLISH_CONFIG.js');

const isProd = process.env.NODE_ENV === 'production';
const isAutoPublish = process.env.AUTO_PUBLISH === 'true';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: path.resolve(__dirname, '../src/app.ts'),
  },
  output: {
    filename: isProd ? '[name].[hash:8].js' : '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.ts', '.js'],
  },
  devServer: isProd ? undefined : {host: '0.0.0.0'},
  module: {
    rules: [
      {
        test: /\.(less|css)$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {url: true}}, // necessary if you use url('/path/to/some/asset.png|jpg|gif')
          {
            loader: 'less-loader',
            options: {lessOptions: {strictMath: true}}
          }
        ]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(png|jpe?g|gif|ico|jfif)$/i,
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MZ-DESKTOP',
      filename: 'index.html',
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
      template: path.resolve(__dirname, '../public/index.html'),
      chunks: ['app']
    }),
    isProd && new CleanWebpackPlugin(),
    isProd && isAutoPublish && new MZQiniuUploadWebpackPlugin(PUBLISH_CONFIG)
  ].filter(i => !!i)
};
