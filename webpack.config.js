const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})
 
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  stats: { children: true },
  mode:'production',
  output: {
    filename: 'my-web-cv-webpack.bundle.js',
  },
  module: {
    rules: [{test: /\.txt$/,exclude: /node_modules/,use: [{loader: "raw-loader"}]},
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
        
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}