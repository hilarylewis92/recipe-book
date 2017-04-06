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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style!css-loader"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.css']
  }
}
