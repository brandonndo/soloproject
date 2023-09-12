const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    // somehow knows its in src folder so dont need ./src/index.js
    output: {
        path: path.resolve(__dirname, 'public'),
        // changed public from dist
        filename: 'main.js'
        // don't have a main.js yet.
        // will auto create once we npm run build
    },

    target: 'web',
    devServer: {
        port: '3000',
        static: ['./public'],
        open: true,
        hot: true,
        liveReload: true
    }, 
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
}