const common = require('./webpack.common.js');
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'dist/css[name].[contenthash].css'
})

module.exports = merge(common, {
    output:{
        publicPath: '.'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {loader: 'css-loader', options: {minimize: true}},
                        {loader: 'sass-loader'}
                    ]
                })
            }
        ]
    },
    plugins: [extractSass]
});