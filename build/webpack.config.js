const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    main: path.resolve(__dirname, '../src/main.ts'),
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
  devServer: isProd ? undefined : {
    host: '127.0.0.1',
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://sakura.zhangji.xyz',
        secure: false,
        changeOrigin: true
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.(style)$/i,
        use: [
          {loader: 'raw-loader'},
          {
            loader: 'less-loader',
            options: {lessOptions: {strictMath: true}}
          }
        ]
      },
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
      chunks: ['main']
    }),
    isProd && new CleanWebpackPlugin(),
  ].filter(i => !!i)
};
