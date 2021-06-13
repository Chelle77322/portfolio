const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join("%PUBLIC_URL%/portfolio/"),
    filename: "index.html"
});
module.exports = {
    entry: path.join("%PUBLIC_URL%/portfolio/"),
    output: {
        path: path.join("%PUBLIC_URL%/portfolio/build/"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss|.css$/,
                use: ["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
  
    devServer: {
        historyApiFallback: true,
        contentBase: '/',
        port: 1011
    }
};
