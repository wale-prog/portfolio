const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    devServer: {
      watchForFileChanges: false,
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
});
