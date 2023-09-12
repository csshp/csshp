const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: "./index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "index_bundle.js",
    },
    target: "web",
    devtool: 'inline-source-map',
    devServer: {
        port: "3000",
        static: {
            directory: path.join(__dirname, "public"),
        },
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        fallback: {
            path: require.resolve("path-browserify"),
            os: require.resolve("os-browserify/browser"),
            crypto: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(png|jpg|gif|svg)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new Dotenv({}),
        new webpack.DefinePlugin({
            "process.env.PUBLIC_URL": JSON.stringify(process.env.PUBLIC_URL),
        }),
    ],
};
