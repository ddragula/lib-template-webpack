import path from 'node:path';
import { fileURLToPath } from 'node:url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import RemoveEmptyScriptsPlugin from 'webpack-remove-empty-scripts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'production',

    entry: {
        'lib-template-webpack': path.resolve(__dirname, '..', 'src', 'index.ts'),
        'styles/lib-template-webpack': path.resolve(__dirname, '..', 'styles', 'index.css')
    },

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js',
        library: {
            name: 'LibTemplateWebpack',
            type: 'umd'
        },
        globalObject: 'this',
        clean: true
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: [{
                loader: 'ts-loader',
                options: { transpileOnly: true }
            }]
        }, {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    },

    plugins: [
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],

    optimization: {
        minimize: false, // jsDelivr will minify the files
        splitChunks: false,
        runtimeChunk: false
    },

    devtool: false
};
