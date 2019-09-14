const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './index.js'),
    output: {
        publicPath: ASSET_PATH
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.(scss|css)$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            issuer: {
                test: /\.(js|jsx)$/
            },
            use: ['@svgr/webpack']
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            issuer: {
                test: /\.(scss|css)$/
            },
            loader: 'url-loader'
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}