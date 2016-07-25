const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const nodeDebug = process.env.NODE_DEBUG || false;
const isProd = nodeEnv === 'production';
const isDev = nodeEnv === 'development';
const srcPath = path.join(__dirname, 'src');
const modulesPath = path.join(__dirname, 'node_modules');

const plugins = [
  new ExtractTextPlugin({
    filename: 'bundle.css',
    allChunks: true
  }),
  // new webpack.optimize.OccurrenceOrderPlugin(), (webpack@1)
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
      NODE_DEBUG: JSON.stringify(nodeDebug)
    },
    __DEV__: isDev
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
    minChunks: Infinity
  })
];

switch (nodeEnv) {
  case 'production':
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }));
    plugins.push(new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
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
  debug: nodeDebug,
  devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
  noInfo: nodeEnv === 'test',
  entry: {
    bundle: srcPath,
    vendor: ['react', 'react-dom', 'redux', 'redux-thunk', 'react-redux', 'react-router', 'react-router-redux', 'classnames'].concat(isDev ? ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', 'react-hot-loader/patch?quiet=false'] : [])
  },
  output: {
    path: path.join(__dirname, isProd ? 'build' : '.tmp'),
    pathinfo: true,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss'],
    packageMains: ['jsnext:main', 'main', 'style'], // support `style` main field for normalize.css
    // fallback: modulesPath, // support linked modules (webpack@1)
    alias: {
      react: fs.realpathSync(path.join(modulesPath, 'react')) // force components to always use this local copy
    },
    // root: srcPath // (webpack@1)
    modules: [ // (webpack@2)
      srcPath,
      'node_modules'
    ]
  },
  // resolveLoader: {
  //   fallback: modulesPath // support linked modules
  // },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [srcPath, fs.realpathSync(path.join(modulesPath, 'react-toolbox/components'))], // `realpath` is used to support linked modules
      loaders: ['babel']
    }, {
      test: /(\.scss|\.css)$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style',
        loader: 'css?sourceMap&modules&importLoaders=1&localIdentName=[local]__[path][name]__[hash:base64:5]!postcss!sass?sourceMap'
      })
    }, {
      test: /\.svg$/,
      include: srcPath,
      loaders: ['html']
    }]
  },
  sassLoader: {
    data: [
      '@import "' + path.resolve(srcPath, 'styles/_theme.scss') + '";', // eslint-disable-line
      '@import "' + path.resolve(srcPath, 'styles/_globals.scss') + '";' // eslint-disable-line
    ].join('\n')
  },
  postcss: [autoprefixer({browsers: isProd ? 'last 2 versions' : 'last 2 Chrome versions, last 2 iOS versions'})],
  plugins
};
