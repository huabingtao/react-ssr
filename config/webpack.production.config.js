const { merge } = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
    devtool: 'none',
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
})