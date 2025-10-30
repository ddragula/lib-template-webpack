import path from 'node:path';

export default {
    mode: 'production',

    entry: {
        'lib-template-webpack': path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'src', 'index.ts')
    },

    output: {
        path: path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'dist'),
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
                options: { transpileOnly: true }
            }]
        }]
    }
};
