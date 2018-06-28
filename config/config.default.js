'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530166557768_7086';

  // add your config here
  config.middleware = [];
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    }
  };
  return config;
};
