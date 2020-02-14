const path = require('path');
const webpack = require('webpack');

const keysTransformer = require('ts-transformer-keys/transformer').default;
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_PATH = path.join(__dirname, '../static/client');
const STORIES_PATH = path.join(__dirname, '../stories');

module.exports = ({ config }) => {
    config.optimization = {
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
    };

    config.resolveLoader = {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'webpack/loaders')
        ]
    };

    config.module.rules = [{
        test: /\.(ts|tsx)$/,
        include: [SRC_PATH, STORIES_PATH],
        exclude: /(node_modules)/,
        use: [
            {
                loader: require.resolve('ts-loader'),
                options: {
                    getCustomTransformers: program => ({
                        before: [
                            createStyledComponentsTransformer(),
                            keysTransformer(program)
                        ],
                    }),
                },
            },
            {
                loader: require.resolve('react-docgen-typescript-loader'),
            },
        ],
    }];

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

    config.resolve = {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
        modules: ['node_modules', 'static'],
        plugins: [
            new TsconfigPathsPlugin({configFile: './.storybook/tsconfig.json'})
        ]
    };


    const cssLoaders = [
        {loader: './webpack/loaders/b_-loader/loader.js'},
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: 'postcss-loader'}
    ];

    const sassLoader = {
        loader: 'sass-loader',
        options: {
            sourceMap: false,
            resolveUrl: true,
            includePaths: ['./static/client/sass']
        },
    };

    config.module.rules.push(
        {
            test: /\.css$/,
            include: [
                path.resolve(__dirname, '../'),
                path.resolve(__dirname, '../node_modules'),
            ],
            use: cssLoaders,
        },
        {
            test: /\.scss$/,
            include: [
                path.resolve(__dirname, '../node_modules'),
                path.resolve(__dirname, '../'),
            ],
            use: [
                ...cssLoaders,
                sassLoader,
            ],
        },
    );

    config.module.rules.push({
        test: /\.less$/,
        use: [
            "style-loader",
            "css-loader",
            {
                loader: "less-loader",
                options: {
                    javascriptEnabled: true
                }
            }
        ]
    });

    config.module.rules.push(
        {test: /\.(jpe?g|png|gif)$/i, loader: 'url-loader?limit=10000!img-loader?progressive=true'},
        {test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=fonts/[name].[ext]'},
        {test: /\.svg$/, loader: 'svg-inline-loader'},
    );

    config.plugins.push(
        new MiniCssExtractPlugin({filename: '[name].css', chunkFilename: '[name].css'}),
        new webpack.LoaderOptionsPlugin({options: {context: process.cwd()}}),
    );

    return config;
};
