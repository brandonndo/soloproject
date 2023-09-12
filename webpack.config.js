const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    // somehow knows its in src folder so dont need ./src/index.js
    output: {
        path: path.resolve(__dirname, 'public'),
        // changed public from dist
        filename: 'main.js',
        // don't have a main.js yet.
        // will auto create once we npm run build
        // publicPath: '/' 
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: 'Development',
            template: '/public/index.html'
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
                use: ['style-loader', 'css-loader']
            },
        ],
    },

    target: 'web',
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

// const path = require("path");
// const HTMLWebPackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: "development",
//   entry: "./client/index.js",
//   output: {
//     path: path.resolve(__dirname, "public"),
//     filename: "main.js",
//   },
//   plugins: [
//     new HTMLWebPackPlugin({
//         title: "Development", 
//         template: './public/index.html',
//     })
// ],

//   devServer: {
//     host: 'localhost',
//     port: "8080",
//     open: true,
//     hot: true,
//     liveReload: true,
//     static: {
//         publicPath: '/public',
//         directory: path.resolve(__dirname, 'public')
//     },
//     proxy: {
//         '/': 'http://localhost:3000/',
//     }
//   },
//   resolve: {
//     extensions: [".js", ".jsx", ".json"],
//   },
//   module: {
//     rules: [
//       {
//         test: /.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: "babel-loader",
//       },
//       {
//         test: /.(css|scss)$/,
//         use: ['style-loader', 'css-loader']
//       },
//     ],
//   },
// };