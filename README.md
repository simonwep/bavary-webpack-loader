<h3 align="center">
    <img src="https://user-images.githubusercontent.com/30767528/70864589-bd7c2d80-1f53-11ea-8fa3-377645d9c941.png" alt="Logo">
</h3>

<br>

<p align="center">
    <a href='https://coveralls.io/github/Simonwep/bavary-webpack-loader?branch=master'><img
       src='https://img.shields.io/coveralls/github/Simonwep/bavary-webpack-loader?style=flat-square'
       alt='Coverage Status'/></a>
    <a href="https://travis-ci.org/Simonwep/bavary-webpack-loader"><img
       alt="Build Status"
       src="https://img.shields.io/travis/Simonwep/bavary-webpack-loader.svg?style=flat-square"></a>
    <a href="https://www.npmjs.com/package/@bavary/webpack-loader"><img
       alt="Download count"
       src="https://img.shields.io/npm/dm/@bavary/webpack-loader.svg?style=flat-square"></a>
    <img alt="Current version"
         src="https://img.shields.io/github/tag/Simonwep/bavary-webpack-loader.svg?color=21068E&label=version&style=flat-square">
    <a href="https://github.com/sponsors/Simonwep"><img
       alt="Support me"
       src="https://img.shields.io/badge/github-support-387eff.svg?style=flat-square"></a>
</p>

> Checkout [related packages](#related-packages)

Install via npm:
```shell
$ npm install -g @bavary/webpack-loader
```

Install via yarn:
```shell
$ yarn global add @bavary/webpack-loader
```


## Usage
Create a new rule with `@bavary/webpack-loader` as loader:

```js
module.exports = {
    // ...

    module: {
        rules: [
            {
                test: /\.bv$/,
                use: '@bavary/webpack-loader'
            }
        ]
    }

    // ...
};
```

Be sure to install the peer-dependency [@bavary/core](https://github.com/Simonwep/bavary) and optionally
[@bavary/bavary-lib](https://github.com/Simonwep/bavary-lib) if you want make use of the functions option.

#### Available options
```js
const options =  {

    // Module type
    esModule: false,

    ...bavaryOptions
}
```

where `bavaryOptions` are all options which can be used in the [compiler configuration](https://github.com/Simonwep/bavary/blob/master/docs/config.md#compiler-config).

## Example

`./index.bv`
```html
entry ['A' | 'B']
```

`./app.js`
```js
import parse from './index.bv';
console.log(parse('A')); // Logs "A"
```


#### Related packages
* [@bavary/core](https://github.com/Simonwep/bavary) _- Parser and compiler._
* [@bavary/cli](https://github.com/Simonwep/bavary-cli) _- CLI with development server._
* [@bavary/bavary-lib](https://github.com/Simonwep/bavary-lib) _- Standard library with extensions for bavary._
* [@bavary/webpack-loader](https://github.com/Simonwep/bavary-webpack-loader) _- Webpack loader for declaration files._

