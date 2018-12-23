const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: path.resolve(__dirname, './src')
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    https: false,
    disableHostCheck: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './templates/index.html',
      filename: 'index.html'
    })
  ]
};