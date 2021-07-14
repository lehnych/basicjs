module.exports = {

    options: {
        curly: true,
        eqeqeq: false,
        eqnull: true,
        browser: true,
        expr: true,
        laxbreak:true,
        esnext: true,
        '-W032': true,
        //quotmark: 'single',
        globals: {
            jQuery: true
        }
    },

    theme: {
        src: [ 'build/js/*.js' ]
    }
};
