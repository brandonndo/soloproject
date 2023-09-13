const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/index.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
    },
    // main.js aka bundle will auto create once we npm run build
    // publicPath: '/' 
    
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Development',
            template: './public/index.html'
        })
    ],
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /.(css|scss)$/,
                // exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },


    devServer: {
        host: 'localhost',
        port: '8080',
        open: true,
        hot: true,
        liveReload: true,
        static: {
            publicPath: '/public',
            directory: path.resolve(__dirname, 'public')
        },
        proxy: {
            '/': 'http://localhost:3000'
        },
    }, 
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
}

