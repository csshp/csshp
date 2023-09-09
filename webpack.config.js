const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index_bundle.js",
    },
    target: "web",
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
                //test → ファイル名を検知する（CSSファイルを検知する）
                test: /\.css/,
                //CSSファイルを検知した場合、以下ルールを適用する（css-loaderを実行せよ）
                use: [
                    //ここから追加
                    {
                        loader: "style-loader",
                    },
                    //ここまで追加
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
    ],
};
