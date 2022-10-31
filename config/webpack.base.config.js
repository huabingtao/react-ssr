const path = require('path');
const { resolve } = require('../utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');

module.exports = {
  entry: path.resolve(__dirname,'..','client/index.js'),
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          // 只编译app文件夹下的文件
          include: path.resolve(__dirname, '..','client'),
          use: {
              loader: 'babel-loader',
              options: {
                  presets: [
                      '@babel/preset-env',
                      '@babel/preset-react',
                  ],
              }
          }
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          "postcss-loader",
          'less-loader',
        ],
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '..','dist'),
    clean: true
  },
  resolve: {
    // 设置路径别名
    alias: {
        '@': path.resolve(__dirname, '..', 'client'),
    },
    // 文件后缀自动补全, 就是你import文件的时候如果没写后缀名就会优先找下面这几个
    extensions: [ '.js', '.jsx' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '..', 'public/index.html')
    })
  ]
};