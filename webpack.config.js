const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.bundle.js"
    },
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 8080,
        hot: true
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    'ts-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", "css-loader"
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Chatr",
            template: path.join(__dirname, "public", "index.html"),
        }),
    ]
};