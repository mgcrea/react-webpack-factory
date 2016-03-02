const webpack = require('webpack');
const path = require('path');

const pkg = require('./package.json');
const deps = pkg.dependencies;
const debug = process.env.NODE_DEBUG || false;
const env = process.env.NODE_ENV || 'development';
const src = path.join(__dirname, 'src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {NODE_ENV: JSON.stringify(env), NODE_DEBUG: JSON.stringify(debug)},
    __DEV__: env === 'development'
  })
];

if (env !== 'test') {
  plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
    minChunks: Infinity
  }));
  // plugins.push(new ChunkManifestPlugin({
  //   filename: 'manifest.json',
  //   manifestVariable: 'webpackManifest'
  // }));
  plugins.push(new ExtractTextPlugin('bundle.css'));
}

plugins.push(new webpack.ProvidePlugin({
  Promise: 'exports?global.Promise!es6-promise'
  // fetch: 'exports?self.fetch!whatwg-fetch'
}));

switch (env) {
  case 'production':
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true
    }));
    break;
  case 'development':
  case 'test':
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.NoErrorsPlugin());
    break;
  default:
    break;
}

module.exports = {
  debug,
  devtool: env === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
  noInfo: env === 'test',
  entry: {
    bundle: './src/index',
    vendor: ['react', 'react-dom', 'redux', 'redux-actions', 'react-redux', 'react-router'].concat(env === 'development' ? ['webpack-hot-middleware/client?quiet=false', 'babel-preset-react-hmre', 'redux-devtools', 'redux-devtools-log-monitor', 'redux-devtools-dock-monitor'] : [])
  },
  output: {
    path: path.join(__dirname, env === 'production' ? 'dist' : '.tmp'),
    pathinfo: true,
    // publicPath: '/',
    // see http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
    publicPath: 'http://MacBookPro-Olivier.local:3000/',
    filename: '[name].js'
  },
  plugins,
  resolve: {
    // unsafeCache: true,
    root: src
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: src,
      loaders: ['babel', 'eslint']
    }, {
      test: /(\.css|\.scss)$/,
      // include: src, // allow node_modules imports
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    }, {
      test: /(\.html|\.svg)$/,
      include: src,
      exclude: path.join(src, 'index.html'),
      loaders: ['html']
    }, {
      test: /\.woff(2)?(\?\S*)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?\S*)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?\S*)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?\S*)?$/,
      include: path.join(__dirname, 'node_modules'),
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }]
  }
};
