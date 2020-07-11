const common = require('./webpack.common.js')
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJS = require('terser-webpack-plugin')


module.exports = merge(common,{
    plugins:[
      new MiniCssExtractPlugin({
        filename: 'dist/css/[name].[contenthash].css'
      })
    ],
    optimization:{
      minimizer: [new TerserJS(),new OptimizeCssAssetsPlugin({})]
    },
    output: {
        publicPath:'.'
    },
    module: {
        rules: [
          {
            test: /.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
          {
            test:/.html$/,
            use: {loader:'html-loader', options:{minimize:true, attributes:false}}
          }
        ],
      },
})

