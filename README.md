# React Webpack Factory

[![project status](https://img.shields.io/badge/status-beta-blue.svg?style=flat)](https://github.com/mgcrea/react-webpack-factory)

React Webpack Factory is a lean yet powerful starter-kit to build modern React applications.

Its goal is to closely follow today's best practices to bring both a safer and more productive development environment.

## Usage

### Quickstart

1. Clone the project

    ```bash
    git clone -o github https://github.com/mgcrea/react-webpack-factory.git sandbox-app
    cd sandbox-app
    ```

2. Just start!

    ```bash
    npm start
    ```

### Next steps

1. Reset git history

    ```bash
    cd sandbox-app; rm -rf .git; git init
    ```


### Available scripts

| **Script** | **Description** |
|----------|-------|
| start | Run the  the webpack development server |
| test | Run both eslint and mocha tests |
| test-eslint | Run eslint syntax tests |
| test-mocha | Run mocha tests in Chrome with Karma |
| test:watch | Run and watch unit tests |
| build | Bundles the project in production mode under the `dist` folder |

## Dependencies

### Application

| **Name** | **Description** |
|----------|-------|---|
| [React](https://facebook.github.io/react/) | A JavaScript library for building user interfaces. |
| [Bootstrap](http://getbootstrap.com/) | Sleek, intuitive, and powerful front-end framework for faster and easier web development. |

### Development

| **Name** | **Description** |
|----------|-------|---|
| [Babel](https://babeljs.io/) | Allows you to use new JavaScript syntax, right now without waiting for browser support. |
| [Webpack](http://webpack.github.io/) | Bundles JavaScript files for usage in a browser. |
| [Browsersync](https://www.browsersync.io/) | Keep multiple browsers & devices in sync when building websites. |
| [ESLint](http://eslint.org/)| Pluggable linting utility for JavaScript. |
| [Mocha](https://mochajs.org/)| JavaScript test framework running on Node.js and the browser. |
| [Karma](http://karma-runner.github.io/)| A simple tool that allows you to execute JavaScript code in multiple real browsers. |
| [Less](http://lesscss.org/) | CSS pre-processor that allow you to make CSS that is more maintainable, themable and extendable. |


## Authors

**Olivier Louvignes**

+ http://olouv.com
+ http://github.com/mgcrea


## License

```
The MIT License

Copyright (c) 2016 Olivier Louvignes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
