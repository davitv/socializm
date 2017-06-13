
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

function isProduction() {
    return process.env.NODE_ENV === 'production';
}

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }

    return sources;
}

const mainConfig = {
    entry: {
        app: getEntrySources(['./src/app.jsx'])
    },
    output: {
        filename: 'dist/[name].js'
    },
    resolve: {
      modules: [
        path.resolve('./src/js'),
        path.resolve('./node_modules')
      ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            },
            {
                test: /\.jsx/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader?name=dist/images/[hash].[ext]'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            /*{
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
            },*/
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: "file-loader?name=src/[path][name].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/style.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
};

module.exports = mainConfig;
