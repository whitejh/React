const path = require('path');
const {HotModuleReplacementPlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = function (webpackEnv, argv) {

    const isEnvDevelopment = webpackEnv?.NODE_ENV === 'development';
    const isEnvProduction = webpackEnv?.NODE_ENV === 'production';

    const babelLoaderRegExp = /\.(js|jsx)$/;
    const cssRegExp = /\.(css)$/i;
    const cssModuleRegExp = /\.module\.(css)$/;
    const sassRegExp = /\.(scss|sass)$/i;
    const sassModuleRegExp = /\.module\.(scss|sass)$/;

    const cssLoaderOptions = {
        importLoaders: 0,
        sourceMap: isEnvDevelopment,
        modules: false,
    };
    const cssLoaderOptionsForModule = {
        importLoaders: 0,
        sourceMap: isEnvDevelopment,
        modules: true,
    };

    const getStyleLoaders = (cssOptions, preProcessor = '') => {

        const loaders = [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: cssOptions
            }
        ];

        if (preProcessor) {
            loaders.push(
                {
                    loader: require.resolve(preProcessor),
                    options: {
                        indentWidth: 4,
                        sourceMap: isEnvDevelopment,
                        outputStyle: 'compressed',
                    },
                }
            );
        }

        return loaders;

    };

    return {
        mode: 'development',
        entry: path.resolve(__dirname, 'src/index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack', 'url-loader'],
                },
                {
                    test: babelLoaderRegExp,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                    resolve: {
                        extensions: [".js", ".jsx"],
                    },
                },
                {
                    test: cssRegExp,
                    exclude: cssModuleRegExp,
                    use: getStyleLoaders({
                        ...cssLoaderOptions
                    }),
                },
                {
                    test: cssModuleRegExp,
                    use: getStyleLoaders({
                        ...cssLoaderOptionsForModule
                    })
                },
                // extensions .scss or .sass
                {
                    test: sassRegExp,
                    exclude: sassModuleRegExp,
                    use: getStyleLoaders({
                        importLoaders: 1,
                        sourceMap: isEnvDevelopment,
                        modules: false,
                    }, 'sass-loader'),
                },
                // extensions .module.scss or .module.sass
                {
                    test: sassModuleRegExp,
                    use: getStyleLoaders({
                        importLoaders: 1,
                        sourceMap: isEnvDevelopment,
                        modules: true
                    }, 'sass-loader')
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
                filename: 'index.html',
            }),
            new MiniCssExtractPlugin({
                filename: 'resources/css/[name].[contenthash:8].css',
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'public'),
                        globOptions : {
                            ignore: [
                                '**/index.html'
                            ],
                        },
                        to: path.resolve(__dirname, 'dist'),
                        noErrorOnMissing: true,
                    },
                ],
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/')
            },
        },
        devServer: {
            historyApiFallback: true,
            static: {
                directory: path.resolve(__dirname, 'dist'),
            },
            hot: true,
            port: 8000,
        },
    };

}