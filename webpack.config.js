const path = require('path')

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: path.resolve(__dirname,'src','index.jsx'),

    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules : [
            { 
                test: /\.jsx$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ }
        ]
    }
}