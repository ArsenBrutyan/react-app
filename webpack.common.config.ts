import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';

const mainEntries: Record<string, string> = {
    app: path.resolve(__dirname, 'src/pages/app.tsx'),
};

const commonConfig = {
    entry: {
        ...mainEntries,
    },
    rules: [
        {
            test: /\.(ts|js)x?$/i,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                },
            },
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'postcss-loader',
                },
            ],
        },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            type: 'asset/resource',
        },
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()],
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            inject: true,
            filename: `app.html`,
            chunks: ['app'],
            template: 'src/index.html',
        }),
    ],
};

export default commonConfig;