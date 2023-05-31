const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        title:'PWA',
        template: './src/index.html',
      }),
      new WebpackPwaManifest({
        name:'pwa',
        short_name: 'pwa',
        description: '',
        background_color: '',
        theme_color: '',
        start_url: '/',
        publicPath: '/',
        icons:[{
          src: path.resolve('src/images/logo.png'),
          sizes: [100,120,200,250,400,500],
          destination: path.join('assets','icons'),
        }],
      }),
      new InjectManifest({
        swSrc: './src/src-sw.js',
        swDest: 'sw.js',
      }),
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
