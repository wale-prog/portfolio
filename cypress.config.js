const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    watchForFileChanges: false,
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
});
