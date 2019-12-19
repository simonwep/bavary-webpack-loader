import Module from 'module';
import path   from 'path';

const parentModule = module;
const resource = 'test.js';

// eslint-disable-next-line no-underscore-dangle
export default code => {
    const module = new Module(resource, parentModule);
    module.paths = Module._nodeModulePaths(
        path.resolve(__dirname, '../fixtures')
    );

    module.filename = resource;
    module._compile(
        `let __export__;${code};module.exports = __export__;`,
        resource
    );

    return module.exports;
};
