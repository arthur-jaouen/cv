const HtmlPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.tsx',
    output: {
        publicPath: './',
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js',
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
                            presets: ['@babel/preset-env', '@babel/preset-react'],
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
                type: 'asset',
                generator: {
                    filename: 'img/[name].[contenthash][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlPlugin({
            template: './assets/index.html',
            title: 'CV Arthur JAOUEN',
        }),
        new ForkTsCheckerPlugin(),
    ],
    stats: 'minimal',
    ignoreWarnings: [/auto-fill/],
};
