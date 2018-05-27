const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin =  require ( 'html-webpack-plugin' );

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

const config = {
    context: paths.src,

    entry: {
        app: './index'
    },
    
    output: {
        path: paths.dist,
        filename: '[name].bundle.js'
    },
    
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        
        alias: {
            Helper: path.resolve(__dirname, 'src/helper')
        }
    },

    devtool: 'inline-source-map',
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }, 
            {
                test: /\.less?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};

module.exports = config;
