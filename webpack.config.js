const path = require('path');
const dir = path.resolve(__dirname, 'public/dist')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: dir,
    filename: 'bundle.js'
  }, 
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
      
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
  ]
};

module.exports = config;  