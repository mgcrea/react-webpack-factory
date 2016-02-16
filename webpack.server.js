/* eslint-disable */

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var modRewrite = require('connect-modrewrite');
var browserSync = require('browser-sync');
var config = require('./webpack.config');

var bundler = webpack(config);

// Run Browsersync and use middleware for Hot Module Replacement
browserSync({
  notify: process.argv.indexOf('--notify') !== -1,
  open: process.argv.indexOf('--no-open') === -1,
  server: {
    baseDir: ['src'],
    middleware: [
      webpackDevMiddleware(bundler, {
        // Dev middleware can't access config, so we provide publicPath
        publicPath: config.output.publicPath,
        // Pretty colored output
        stats: {colors: true},
        // Set to false to display a list of each file that is being bundled.
        noInfo: config.noInfo
      }),
      webpackHotMiddleware(bundler),
      modRewrite([
        '!\\.[\\w\\?\\=]+$ /index.html [L]'
      ]),
    ]
  },
  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [
    'src/*.html'
  ]
});
