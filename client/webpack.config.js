let debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

let config = {
    context: path.join(__dirname, 'src'),
    devtool: debug ? "sourcemap" : false,
    entry: {
        app: ['./app/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
    plugins: debug ? [] : [
        new CopyWebpackPlugin([
            {from: 'assets'},
            ]),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],
    devServer: {
        inline: true,
        port: 8080,
        proxy: { "/api/**": { target: 'http://localhost:3000', secure: false }}
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
module.exports = config;