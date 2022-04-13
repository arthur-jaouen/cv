const { mergeWithRules } = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = mergeWithRules({ module: { rules: { test: 'match', use: 'prepend' } } })(baseConfig, {
    mode: 'production',
    target: 'browserslist',
    devtool: 'source-map',
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{ loader: MiniCssExtractPlugin.loader }],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        }),
    ],
});
