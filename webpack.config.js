const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {


    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname + 'dist'),
        filename : 'bundle.js',
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './src/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },

    devServer: {
        // historyApiFallback: true,
        historyApiFallback: { index: "/", disableDotRule: true },
       
    },
    mode: 'development',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}