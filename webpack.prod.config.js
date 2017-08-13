let path = require('path');
let webpack = require('webpack');
let NpmInstallPlugin = require('npm-install-webpack-plugin');
let autoprefixer = require('autoprefixer');
let precss = require('precss');

module.exports = {
    devtool: null,
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {except: ['$', 'exports', 'require', 'app']},
            compress: {warnings: false},
            sourceMap: false
        })
    ],
    module: {
        loaders: [
            {
                loaders: ['react-hot', 'babel-loader'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
                test: /\.js$/,
                plugins: ['transform-runtime'],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'isomorphic-style-loader',
                    'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "file-loader?name=img/img-[hash:6].[ext]"
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};

