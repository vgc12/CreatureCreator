const path = require("path");
const webpack = require("webpack");
module.exports = {
    context: __dirname,
    entry: "./src/ts/index.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "src/js"),
        publicPath: "/src/js/",
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use:{
                loader: "ts-loader",
            }
        }]
    },

    resolve: {
        extensions: [".ts"]
    },

  plugins: [
    /* Use the ProvidePlugin constructor to inject jquery implicit globals */
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),

  ]
}