const path = require('path');
const baseDir = path.resolve(__dirname, '../src');

// load the dev config from react-boilerplate
const devConfig = require('../config/webpack.config.dev.js');

module.exports = function genConfig(storybookBaseConfig) {
  // concat loaders from dev config
  /* eslint-disable no-param-reassign */
  storybookBaseConfig.module.loaders = storybookBaseConfig.module
    .loaders.concat(devConfig.module.loaders);

  // add the "app" folder to the resolve list
  storybookBaseConfig.resolve.fallback.push(baseDir);

  // return the altered config
  return storybookBaseConfig;
};
