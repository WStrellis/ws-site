/* 
Webpack settings for production env
 */
const TerserPlugin = require("terser-webpack-plugin")

module.exports = () => ({
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.(js|jsx)$/,
            }),
        ],
    },
    devtool: "source-map",
})
