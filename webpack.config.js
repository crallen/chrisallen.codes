const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const mode = isProd ? 'production' : 'development';

let config = {
  mode,
  devtool: 'source-map',
  entry: './assets/js/main.js',
  output: {
    path: path.resolve('./public/assets'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProd
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ]
};

if (isProd) {
  config = webpackMerge(config, {
    optimization: {
      minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin()]
    }
  });
} else {
  config = webpackMerge(config, {
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      port: 8080,
      contentBase: path.join(__dirname, 'public'),
      hot: true,
      watchContentBase: true
    }
  });
}

module.exports = config;
