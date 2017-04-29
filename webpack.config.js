var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var config = {
  devtool: 'source-map',
  entry: {
    vendor: './assets/js/vendor.js'
  },
  output: {
    path: path.resolve('./static/js'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },
  resolve: {
    alias: {
      bootstrap: path.resolve('./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};

if(process.env.NODE_ENV === 'production') {
  config = webpackMerge(config, {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        comments: false
      })
    ]
  });
}

module.exports = config;
