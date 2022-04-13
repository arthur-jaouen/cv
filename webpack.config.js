import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import autoprefixer from 'autoprefixer';

const config = (env) => ({
    mode: env.dev ? 'development' : 'production',
    target: env.dev ? 'web' : 'browserslist',
    devtool: env.dev ? 'inline-source-map' : 'source-map',
    entry: './src/index.tsx',
    output: {
        publicPath: env.dev ? '/' : './',
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
                    { loader: env.dev ? 'style-loader' : MiniCssExtractPlugin.loader },
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
        ...(env.dev
            ? []
            : [
                  new MiniCssExtractPlugin({
                      filename: 'css/[name].[contenthash].css',
                      chunkFilename: 'css/[name].[contenthash].css',
                  }),
              ]),
        ...(env.analyze ? [new BundleAnalyzerPlugin()] : []),
    ],
    stats: 'minimal',
    ignoreWarnings: [/auto-fill/],
});

export default config;
