import path from 'path';

export default (asset, compiler, stats) => {
    const outputPath = stats.compilation.outputOptions.path;
    const usedFs = compiler.outputFileSystem;
    let data;

    try {
        data = usedFs.readFileSync(path.join(outputPath, asset)).toString();
    } catch (error) {
        data = error.toString();
    }

    return data;
};
