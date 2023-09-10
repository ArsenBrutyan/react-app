import {
    Configuration as WebpackConfiguration,
    WatchIgnorePlugin,
} from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';

import commonConfig from './webpack.common.config';

interface IConfiguration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const config: IConfiguration = {
    mode: 'development',
    output: {
        publicPath: '/',
    },
    entry: { ...commonConfig.entry },
    module: {
        rules: [...commonConfig.rules],
    },
    resolve: { ...commonConfig.resolve },
    plugins: [
        ...commonConfig.plugins,
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
        new WatchIgnorePlugin({
            paths: [path.join(__dirname, 'src/static')],
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        watchFiles: ['src/**/*'],
        static: [path.join(__dirname, 'src/static')],
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
                'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers':
                'X-Requested-With, content-type, Authorization',
        },
        historyApiFallback: {
            rewrites: [
                {
                    from: /^\/app\/([^\/\?]*)[\/]?$/,
                    to: '/app.html',
                },
            ],
        },
        allowedHosts: ['localhost'],
        port: 3000,
        open: ['/app.html'],
        hot: true,
    },
};

export default config;