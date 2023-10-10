const path = require('path');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const PORT = 8080;

module.exports = {
  mode: 'production',
  entry: [
    './src/test-react-microfrontend.js',
  ],
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: `http://localhost:${PORT}/`,
    library: {type: 'var', name: 'reactMicrofrontend'},
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: false,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory'],
      },
    ],
  },

  devServer: {
    port: PORT,
    historyApiFallback: true,
    allowedHosts: 'all',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    hot: false,
    client: {
      overlay: false,
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'reactMicrofrontend',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './src/test-react-microfrontend.js',
      },
    }),,
  ],
};