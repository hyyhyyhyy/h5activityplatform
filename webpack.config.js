const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path");

module.exports = {

    /* webpack打包入口*/
    entry: './src/index.jsx',

    /*webpack输出 */
    output: {

        //输出文件名
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader'
            },
            {
                test: /\.scss|css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'//css前缀
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            { test: /\.(jpg|png)$/, loader: "url-loader" },

        ]
        // mode: 'development',
    },
    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true

    },

    plugins: [
        new CleanWebpackPlugin("dist"),
        new HtmlWebpackPlugin(
            {  // Also generate a test.html
                filename: 'index.html',
                template: './index.html'
            }
        )
    ],

    resolve: {
        extensions: ['.jsx', '.js', '.json']
    }

}