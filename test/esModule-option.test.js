import {compile, execute, getCompiler, readAsset} from './helper';

describe('Option: "esModule"', () => {
    it('Should work without value', async () => {
        const compiler = getCompiler('simple/index.js');
        const stats = await compile(compiler);

        expect(execute(readAsset('main.bundle.js', compiler, stats))).toMatchSnapshot('result');
        expect(stats.compilation.warnings).toMatchSnapshot('warnings');
        expect(stats.compilation.errors).toMatchSnapshot('errors');
    });

    it('Should work with "Boolean" value equal "true"', async () => {
        const compiler = getCompiler('simple/index.js', {
            esModule: true
        });

        const stats = await compile(compiler);
        expect(execute(readAsset('main.bundle.js', compiler, stats))).toMatchSnapshot('result');
        expect(stats.compilation.warnings).toMatchSnapshot('warnings');
        expect(stats.compilation.errors).toMatchSnapshot('errors');
    });

    it('Should work with "Boolean" value equal "false"', async () => {
        const compiler = getCompiler('simple/index.js', {
            esModule: false
        });

        const stats = await compile(compiler);
        expect(execute(readAsset('main.bundle.js', compiler, stats))).toMatchSnapshot('result');
        expect(stats.compilation.warnings).toMatchSnapshot('warnings');
        expect(stats.compilation.errors).toMatchSnapshot('errors');
    });
});
