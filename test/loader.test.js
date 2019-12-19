import {compile, execute, getCompiler, readAsset} from './helper';

describe('Loader', () => {

    it('Should work without options', async () => {
        const compiler = getCompiler('index.js');
        const stats = await compile(compiler);

        expect(execute(readAsset('main.bundle.js', compiler, stats))).toMatchSnapshot('result');
        expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
        expect(stats.compilation.warnings).toMatchSnapshot('warnings');
        expect(stats.compilation.errors).toMatchSnapshot('errors');
    });
});