const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',

    entry: {
        'lib-template-webpack': path.resolve(__dirname, '..', 'src', 'index.ts')
    },

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: (pathData) => `${pathData.chunk.name}.min.js`,
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
                options: {
                    transpileOnly: true
                }
            }]
        }]
    }
};
