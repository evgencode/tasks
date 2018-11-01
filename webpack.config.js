/* global module */
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

const ENVIRONMENT = process.argv[3] || 'development'
const OPTIMIZE = ENVIRONMENT !== 'development'
const PUBLIC_DIR = path.resolve(__dirname, 'public')
const SRC_DIR = path.resolve(__dirname, 'app')

const plugins = [
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /(en-gb|ru)\.js/),
  new HtmlWebpackPlugin({
    filename: path.join(PUBLIC_DIR, 'index.html'),
    template: path.join(SRC_DIR, 'index.html'),
    inject: false
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  })
]
if (OPTIMIZE) {
  plugins.push(new CleanWebpackPlugin(['public']))
}

const loaders = [
  {
    test: /.jsx?$/,
    include: SRC_DIR,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-react'],
          plugins: ['transform-class-properties', 'transform-object-rest-spread']
        }
      }
    ]
  },
  {
    test: /\.s?css$/,
    loaders: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[folder]---[local]---[hash:base64]'
        }
      },
      'sass-loader'
    ]
  },
  {
    test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[md5:hash:hex:6].[ext]'
    }
  }
]

const getExtraOptions = () =>
  OPTIMIZE
    ? {}
    : {
        watch: true,
        watchOptions: {
          ignored: ['app/dist/**', 'node_modules/**']
        },
        devtool: 'source-map'
      }

module.exports = {
  entry: {
    index: ['./app/index.js']
  },
  output: {
    path: path.join(PUBLIC_DIR, 'dist/'),
    filename: `[name]${OPTIMIZE ? '.[hash:6]' : ''}.js`,
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', 'jsx', '.json']
  },
  module: {
    rules: loaders
  },
  plugins: plugins,
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          chunks: 'all',
          name: 'styles',
          test: /\.css$/,
          enforce: true
        },
        vendors: {
          chunks: 'initial',
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          enforce: true
        }
      }
    }
  },
  ...getExtraOptions()
}
