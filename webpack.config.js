const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // entry: path.join(__dirname, '/src'), // now this transpiles my index.js, but not my index.ts
    // entry: path.join(__dirname, '/src/index.js'),
    // entry: path.join(__dirname, '/src/index.ts'),
    entry: path.join(__dirname, '/src'),  // now this compiles my .ts not my .js.. weirdness - because I changed how the loader is used on .ts test?
    // entry: path.join(__dirname, '/src/**/*(.ts|.js)'),  // this does nothing but break the code
    // entry: path.join(__dirname, '/src/**/*.(ts|js)'),  // this does nothing but break the code
    // entry: path.join(__dirname, '/src/index.ts'),// this compiles the index.ts
    // entry: './src', // now this transpiles my index.js, but not my index.ts
    // entry: './src/index.ts', // hits the index.ts
    // entry: './src/index.ts', // hits the index.ts
    // entry: ,
    output: {
        filename: 'bundle.js',
        path: __dirname + 'dist'
    },
    module: {
        rules: [
            {
                test: /\.js#/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.ts?$/,// was /\.tsx?$/, but I dropped the x since this isn't a react project
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false}
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new TSLintPlugin({
            files: ['./src/**/*.ts']
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}