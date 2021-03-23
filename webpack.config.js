const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: './assets/styles/[name].css'
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
                use: [
                    MiniCssExtractPlugin.loader, "css-loader?url=false", "postcss-loader", "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    },
    devServer: {
        contentBase: 'app',
        port: 3000,
        inline: true,
        host: '0.0.0.0',
        watchContentBase: true,
    },
    mode: 'development',
    devtool: 'source-map',
    mode: 'development'
};