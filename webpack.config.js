const path = require('path');

module.exports = {
    entry: './assets/javascript/entry.js',
    output: {
        publicPath:'/',
        path: path.join(__dirname, '..'),
        filename: 'dist/javascript/bundle.js'
    },
    plugins: [],
    module: {}
}