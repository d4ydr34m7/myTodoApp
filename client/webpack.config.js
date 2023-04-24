
require("dotenv").config()

module.exports = {
  // ...
  env:{
    ANSWER: process.env.ANSWER,
  },
  node: {
    fs: 'empty',
    path: 'empty',
  },
  resolve: {
    // add the fallback setting below 
    fallback: {
      "fs": false,
      "os": false,
      "path": false
    },
  },
  externals: {
    fs: 'commonjs fs'
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser")
    }
  },
  // ...
};
