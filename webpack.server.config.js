const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const baseConfig = require('./webpack.base.config');

const config = {
    target: 'node',
    entry: './static/server/index.tsx',
    externals: [webpackNodeExternals()],
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist', 'server')
    },
    module: {rules: []},
    plugins: [
        new webpack.ProvidePlugin({
            window: path.resolve(path.join(__dirname, './webpack/window.mock')),
            document: 'global/document',
        }),
    ],
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'webpack/loaders')
        ]
    }
};

const cssLoaders = [
    {loader: './webpack/loaders/b_-loader/loader.js'},
    {loader: 'null-loader'}
];

const cssRules = [
    {
        test: /\.scss$/,
        use: cssLoaders
    },
    {
        test: /\.css$/,
        use: cssLoaders
    },
];

config.module.rules.push(...cssRules);

module.exports = merge(baseConfig, config);
