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
            '/': 'http//localhost:3000'
            // change later depending on 
            /*
            proxy: {
            '/': 'http://localhost:3000/',
}
proxy: {
            '/': 'http://localhost:3000/',
          '/'home: 'http://localhost:3000/',
}
We need to set the proxy setting within devServer in webpack.config.js. 
Search the documentation. The proxy setting allows the request for /api/leaders, 
which would normally be for the domain localhost:8080, to be instead made for 
the domain localhost:3000. Thus, instead of the request for /api/leaders being 
made to localhost:8080/api/leaders, the request for /api/leaders is made 
to localhost:3000/api/leaders.
            */
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