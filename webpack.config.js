const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css-loader"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  }
}
