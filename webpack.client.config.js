const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.base.config');
const webpackConfigData = require('./config');

const isProduction = process.env.NODE_ENV === webpackConfigData.__PROD__;

const config = {
    target: 'web',
    mode: isProduction ? webpackConfigData.__PROD__ : webpackConfigData.__DEV__,

    output: {
        publicPath: '/dist/',
        path: path.join(__dirname, 'dist', 'client'),
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash].js',
    },

    module: { rules: [] },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    minChunks: 2,
                },
                default: {
                    minChunks: 2,
                    reuseExistingChunk: true,
                },
            },
        },
    },

    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'webpack/loaders')
        ]
    }
};

const hmrPaths = [
    'webpack-hot-middleware/client?path=/__webpack_hmr',
    'webpack/hot/dev-server',
];
const mainPath = './static/client/index.tsx';

config.entry = {
    index: !isProduction ? [mainPath, ...hmrPaths] : mainPath,
};

config.module.rules.push({
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public\/)/,
    use: {
        loader: 'babel-loader',
        options: {
            babelrc: false,
            presets: [
                '@babel/preset-env',
                '@babel/preset-react',
            ],
            plugins: [
                require('@babel/plugin-proposal-class-properties'),
                require('@babel/plugin-proposal-object-rest-spread'),
                require('@babel/plugin-syntax-dynamic-import'),
                require('react-loadable/babel'),
                [
                    'import',
                    {
                        'libraryName': 'antd',
                        'style': 'css'
                    }
                ]
            ],
        },
    },
});

const cssLoaders = [
    {loader: './webpack/loaders/b_-loader/loader.js'},
    MiniCssExtractPlugin.loader,
    {loader: 'css-loader'},
    {loader: 'postcss-loader'},
];

const sassLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: false,
        resolveUrl: true,
        includePaths: ['./static/client/sass']
    }
};

config.module.rules.push(
    {
        test: /\.css$/,
        use: cssLoaders,
    },
    {
        test: /\.scss$/,
        use: [
            ...cssLoaders,
            sassLoader,
        ],
    },
);

config.plugins = [
    new CheckerPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
    new MiniCssExtractPlugin({filename: '[name].css', chunkFilename: '[name].css', disable: !config.__PROD__}),
    new LodashModuleReplacementPlugin({
        shorthands: true,
        cloning: true,
        currying: true,
        collections: true,
        coercions: true,
        flattening: true,
        paths: true
    }),
    new webpack.WatchIgnorePlugin([
        /css\.d\.ts$/
    ]),
    new webpack.LoaderOptionsPlugin({options: {context: process.cwd()}}),
    new CopyWebpackPlugin([
        {from: './www/favicons', to: 'favicons'},
        {from: './static/client/images', to: 'images'},
    ]),
];

if (process.env.IS_SERVER === 'n') {
    config.plugins.push(
        new ReactLoadableSSRAddon({
            filename: 'react-loadable-ssr-addon.json',
        }),
    );
}

if (!isProduction) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (isProduction) {
    config.optimization.minimizer = [
        new TerserWebpackPlugin({
            terserOptions: {
                output: {comments: false, beautify: false},
                compress: {drop_console: true},
                warnings: false,
            }
        })
    ]
}

module.exports = merge(baseConfig, config);
