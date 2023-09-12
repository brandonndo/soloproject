const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    },

    // plugins: [
    //     new HTMLWebpackPlugin({
    //         template: './src/index/html'
    //     })
    // ],

    // module: {
    //     rules: [
    //         {
    //             test: /\.jsx?/
    //             // /.js$/
    //         }
    //     ]
    // }

}