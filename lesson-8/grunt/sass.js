const sass = require('node-sass');
module.exports = {
    options: {
        implementation: sass,
        outputStyle: 'compressed',
        noCache: true,
        sourceMap: true
    },
    theme: {
        files: {
            'css/styles.min.css': [
                'build/scss/style.scss'
            ]
        }
    }
};
