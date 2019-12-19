import validateOptions from 'schema-utils';
import {getOptions}    from 'loader-utils';
import schema          from './options';

export default function (content) {
    const options = getOptions(this);

    // Validate config object
    validateOptions(schema, options, {
        name: 'Bavary Loader',
        baseDataPath: 'options'
    });

    const esModule = typeof options.esModule !== 'undefined' ? options.esModule : null;
    const functions = options?.functions?.length ? JSON.stringify(options.functions) : null;

    return `
        const {compile} = require('@bavary/core');

        ${esModule ? 'export default' : 'module.exports = '} compile(${JSON.stringify(content)}, {
            locationData: ${options?.locationData || false},
            functions: ${functions ? `require('@bavary/lib').use(${functions})` : 'null'}
        });
    `;
}
