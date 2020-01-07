const webpack = require('webpack');
const path = require('path');

const keysTransformer = require('ts-transformer-keys/transformer').default;
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const webpackConfigData = require('./config');

const isProduction = process.env.NODE_ENV === webpackConfigData.__PROD__;

function srcPath(subdir) {
    return path.join(__dirname, 'static', subdir);
}

const config = {
    mode: isProduction ? webpackConfigData.__PROD__ : webpackConfigData.__DEV__,
    devtool: isProduction ? undefined : 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
        modules: ['./node_modules', './static'],
    },
    module: {rules: []},
    plugins: [
        new webpack.DefinePlugin({
            IS_STABLE: isProduction
        }),
    ]
};

config.module.rules.push(
    {test: /\.(jpe?g|png|gif)$/i, loader: 'url-loader?limit=10000!img-loader?progressive=true'},
    {test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=fonts/[name].[ext]'},
    {test: /\.svg$/, loader: 'svg-inline-loader'},
);

config.module.rules.push(
    {test: /\.tsx?$/, enforce: 'pre', loader: 'tslint-loader'},
    {
        test: /\.tsx?$/,
        use: [
            'react-hot-loader/webpack',
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: program => ({
                        before: [
                            createStyledComponentsTransformer(),
                            keysTransformer(program)
                        ],
                    }),
                },
            },
        ],
        exclude: /(node_modules)/
    }
);

module.exports = config;
