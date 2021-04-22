const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefleshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname,'public'),
        hot: true,
    },
    plugins: [
        isDevelopment && new ReactRefleshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html')
        })
    ].filter(Boolean),
    entry: path.resolve(__dirname,'src','index.jsx'),

    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules : [
            { 
                test: /\.jsx$/, 
                exclude: /node_modules/ ,
                use:{
                    loader: 'babel-loader', 
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            { 
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader',`sass-loader`]
            }
        ]
    }
}