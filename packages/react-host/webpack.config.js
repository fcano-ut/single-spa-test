const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 4201;

module.exports = {
  mode: 'production',
  entry: [
    './src/index.js',
  ],
  output: {
    uniqueName: 'host', // needed because we have both the host and the mfe sharing the same package.json
    path: path.join(__dirname, './dist'),
    publicPath: `http://localhost:${PORT}/`,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },

  devServer: {
    port: PORT,
    historyApiFallback: true,
    allowedHosts: 'all',
    devMiddleware: {
      writeToDisk: true,
    },
    hot: false,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};