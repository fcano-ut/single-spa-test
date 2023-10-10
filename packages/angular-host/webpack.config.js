const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'angularHost',
      remotes: {
        'reactMicrofrontend': 'reactMicrofrontend@http://localhost:8080/remoteEntry.js',
      },
    }),
  ]
};