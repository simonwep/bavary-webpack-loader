import {createFsFromVolume, Volume} from 'memfs';
import webpack                      from 'webpack';
import path                         from 'path';

export default (fixture, loaderOptions = {}, config = {}) => {
    const compiler = webpack({
        mode: 'development',
        target: 'node',

        context: path.resolve(__dirname, '../fixtures'),
        entry: path.resolve(__dirname, '../fixtures', fixture),

        output: {
            path: path.resolve(__dirname, '../outputs'),
            filename: '[name].bundle.js',
            chunkFilename: '[name].chunk.js'
        },

        module: {
            rules: [
                {
                    test: /\.bv$/i,
                    rules: [
                        {
                            loader: path.resolve(__dirname, '../../src'),
                            options: loaderOptions
                        }
                    ]
                }
            ]
        },

        ...config
    });

    // Use memory file-system
    const outputFileSystem = createFsFromVolume(new Volume());
    outputFileSystem.join = path.join.bind(path);
    compiler.outputFileSystem = outputFileSystem;

    return compiler;
};
