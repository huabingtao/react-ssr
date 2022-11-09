const path = require('path');
const { resolve } = require('../utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname,'..','client/index.js'),
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '..','dist'),
    chunkFilename: '[name].js',
    clean: true,
  },
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
                  plugins:['@babel/plugin-syntax-dynamic-import'] // 好像不配置也可以
              }
          }
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          "postcss-loader",
          'less-loader',
        ],
      },
      // 图片资源
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/image/[hash][ext][query]'
        }
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
        include: path.resolve(__dirname, '..', 'client')
      },
    ]
  },
  resolve: {
    // 设置路径别名
    alias: {
        '@': path.resolve(__dirname, '..', 'client'),
    },
    // 文件后缀自动补全, 就是你import文件的时候如果没写后缀名就会优先找下面这几个
    extensions: [ '.js', '.jsx', '.tsx', '.ts' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '..', 'public/index.html')
    }),
    new MiniCssExtractPlugin()
  ]
};