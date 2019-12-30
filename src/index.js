import validateOptions from 'schema-utils';
import {getOptions}    from 'loader-utils';
import schema          from './options';

export default function (content) {
    const options = getOptions(this) || {};

    // Validate config object
    validateOptions(schema, options, {
        name: 'Bavary Loader',
        baseDataPath: 'options'
    });

    const {
        esModule = null,
        functions = null,
        ...coreOptions
    } = options; // TODO: Wtf is wrong here

    return `
        const {compile} = require('@bavary/core');

        ${esModule ? 'export default' : 'module.exports = '} compile(${JSON.stringify(content)}, {
            functions: ${functions ? `require('@bavary/lib').use(${JSON.stringify(functions)})` : 'null'},

            // Inject core options
            ...${JSON.stringify(coreOptions)}
        });
    `;
}
