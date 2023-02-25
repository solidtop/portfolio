const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    mode: 'development',
    target: 'web',
    output: {
        path: path.resolve(__dirname),
        filename: './static/bundle.js'
    }
};