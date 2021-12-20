const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WebpackPwaManifest  = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');


const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    main: path.resolve(__dirname, '../src/main.ts'),
  },
  output: {
    filename: isProd ? '[name].[hash:8].js' : '[name].js',
    path: path.resolve(__dirname, '../dist'),
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
    isProd && new WebpackPwaManifest({
      filename: 'manifest.webmanifest',
      name: 'MZ Desktop Toolkit',
      short_name: 'MZDesktop',
      display: 'standalone',
      description: 'My Awesome Progressive Web App!',
      background_color: '#ccc',
      theme_color: '#ccc',
      start_url: "/?from=pwa",
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      // need to add follow line, cause plugin set publicPath 'auto' as default value
      publicPath: '/' ,
      icons: [
        {
          src: path.resolve(__dirname, '../src/assets/logo.png'),
          sizes: [64, 128] // multiple sizes
        }
      ]
    }),
    isProd && new WorkboxPlugin.GenerateSW({
      // Do not precache images
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],

      // Define runtime caching rules.
      runtimeCaching: [{
        // Match any request that ends with .png, .jpg, .jpeg or .svg.
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

        // Apply a cache-first strategy.
        handler: 'CacheFirst',

        options: {
          // Use a custom cache name.
          cacheName: 'images',

          // Only cache 10 images.
          expiration: {
            maxEntries: 10,
          },
        },
      }],
    })
  ].filter(i => !!i)
};
