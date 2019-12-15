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

    const functions = options?.functions?.length ? JSON.stringify(options.functions) : null;

    return `
        const {compile} = require('@bavary/core');

        module.exports = compile(${JSON.stringify(content)}, {
            locationData: ${options?.locationData || false},
            functions: ${functions ? `require('@bavary/lib').use(${functions})` : {}}
        });
    `;
}
