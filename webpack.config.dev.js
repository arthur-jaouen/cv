const { mergeWithRules } = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const { HotModuleReplacementPlugin } = require('webpack');

module.exports = mergeWithRules({ module: { rules: { test: 'match', use: 'prepend' } } })(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader'],
            },
        ],
    },
    plugins: [new HotModuleReplacementPlugin()],
});
