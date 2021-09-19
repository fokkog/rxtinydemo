// Prevent "Invalid Host header" error when run in CodeSandbox
var path = require('path');
module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'src')
        },
    }
}