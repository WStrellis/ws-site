/* Shared config for all environments */
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (isDevelopment, path, webpack, envKeys) => ({
    entry: {
        app: "./src/index.js",
    },
    output: {
        filename: "[name].[hash].js",
        publicPath: "/",
        path: path.resolve(__dirname, "../", "public"),
        chunkFilename: "[name].[hash].js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                // Process images
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "images",
                        },
                    },
                ],
            },
            {
                // Apply rule for fonts files
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        // Using file-loader too
                        loader: "file-loader",
                        options: {
                            outputPath: "fonts",
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        // Eliminate need to type relative path to directories/files from these paths
        modules: ["node_modules", "test-utils", "src/components"],
        //  imports don't have to use the  file extension
        enforceExtension: false,
        extensions: [
            "*",
            ".js",
            ".jsx",
            ".scss",
            ".sass",
            ".css",
            ".png",
            ".jpg",
            ".jpeg",
            ".gif",
            ".svg",
        ],
    },
    plugins: [
        // delete contents of /dist
        new CleanWebpackPlugin({
            verbose: true,
        }),
        // generate index.html
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "Westley Strellis",
            favicon: "./src/assets/images/favicon.png",
        }),
        // put css in separate file from js
        new webpack.DefinePlugin(envKeys),
    ],
})
