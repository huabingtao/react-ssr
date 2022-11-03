const { merge } = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
    devtool: 'hidden-nosources-cheap-source-map',
    mode: 'production',
    // 设置dev服务器
    plugins: [
        // 在js中注入全局变量process.env用来区分环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
})