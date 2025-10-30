import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
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
                options: { transpileOnly: true }
            }]
        }]
    }
};
