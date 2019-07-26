const argv = require("yargs-parser")(process.argv.slice(2))
const _mode = argv.mode || "development"

const _mergeConfig = require(`./config/webpack.${_mode}.js`)
const merge = require("webpack-merge")
const { CheckerPlugin } = require('awesome-typescript-loader')

console.log("🍎",argv);
const {
    resolve
} = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',
    entry: {
        app: resolve("./src/web/index.tsx")
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }]
    },
    plugins: [
        new CheckerPlugin(),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: 'src/web/index.html'
          })
    ]
}
module.exports = merge(webpackConfig, _mergeConfig)
