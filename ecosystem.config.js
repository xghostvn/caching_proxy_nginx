module.exports = {
  apps : [{
    script: './src/index.js',
    watch: '.',
    name : "caching_proxy_ts",
    env : {
      NODE_ENV : "development"
    }
  }],
};
