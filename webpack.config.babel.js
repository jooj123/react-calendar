import webpack from 'webpack';
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1'
];

const DEBUG = process.env.NODE_ENV !== 'production';
const VERBOSE = false;
const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG
};

/* eslint-disable no-console */
console.log('DEBUG: ', DEBUG);

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    commons: './entry.js',
    example: './example.js'
  },
  output: {
    path: `${__dirname}/build`,
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  // Choose a developer tool to enhance debugging
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  devServer: {
    port: 8080,
    historyApiFallback: true
  },

  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE
  },

  plugins: [
    new CommonsChunkPlugin('commons', 'calendar.bundle.js'),
    new webpack.DefinePlugin(GLOBALS),
    ...(!DEBUG ? [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: VERBOSE
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin()
    ] : [])
  ],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          `css-loader?${JSON.stringify({
            sourceMap: DEBUG,
            // CSS Modules https://github.com/css-modules/css-modules
            modules: true,
            localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
            minimize: !DEBUG,
            discardComments: { removeAll: true }
          })}`,
          'postcss-loader'
        ]
      }
    ]
  },
  postcss: function plugins() {
    return [
      require('postcss-import')({
        onImport: files => files.forEach(this.addDependency)
      }),
      require('postcss-nested')(),
      require('postcss-cssnext')({ autoprefixer: AUTOPREFIXER_BROWSERS })
    ];
  }
};
