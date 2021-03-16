const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: './assets/styles/[name].css'
        }),
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    entry: './app/assets/scripts/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'app')
    },
    module: {
        rules: [{
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader?url=false", "sass-loader"]
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    },
    devServer: {
        // before: function(app, server) {
        //     server.watch('./app/**/*.html')
        // },
        contentBase: 'app',
        port: 3000,
        inline: true,
        host: '0.0.0.0',
        index: 'index.html'
    },
    devtool: 'source-map',
    mode: 'development'
};