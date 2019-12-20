import {compile, execute, getCompiler, readAsset} from './helper';

describe('Options from @bavary/core', () => {
    it('Should properly apply core-options', async () => {
        const compiler = getCompiler('complex/index.js', {
            functions: ['count'],
            locationData: {
                start: 'startsAt',
                end: 'endsAt'
            }
        });

        const stats = await compile(compiler);
        expect(execute(readAsset('main.bundle.js', compiler, stats))).toMatchSnapshot('result');
        expect(stats.compilation.warnings).toMatchSnapshot('warnings');
        expect(stats.compilation.errors).toMatchSnapshot('errors');
    });
});
