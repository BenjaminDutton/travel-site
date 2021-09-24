const path = require('path');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];

module.exports = {
  // location for webpack to enter project
  entry: "./app/assets/scripts/App.js",
  // location of bundled file
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  // watch actively and serve up
  devServer: {
    static: path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  },
  mode: "development",
  // rebundle actively
  // watch: true,
  module: {
    // rules for different file types
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: postCSSPlugins } },
          },
        ],
      },
    ],
  },
};