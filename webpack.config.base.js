const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: 'js/[name].[hash].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: './tsconfig.json',
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', { targets: '> 0.25%, not dead' }], '@babel/preset-react'],
                            plugins: ['@babel/transform-runtime'],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            happyPackMode: true,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'css-loader', options: { sourceMap: true } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [autoprefixer({ grid: 'autoplace' })],
                            },
                        },
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash].[ext]',
                    outputPath: 'img',
                },
            },
            {
                test: /\.(woff2?|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash].[ext]',
                    outputPath: 'fonts',
                },
            },
        ],
    },
    plugins: [
        new HtmlPlugin({
            template: './public/index.html',
            title: 'CV Arthur JAOUEN',
        }),
        new ForkTsCheckerPlugin(),
        new webpack.IgnorePlugin({ resourceRegExp: /^(\.\/locale)$/ }),
    ],
};
