module.exports = {
    options:{
        sourceMap: true
    },

    theme: {
        files: {
            'js/script.min.js': [
                'build/vendor/jquery/js/jquery-3.5.1.js',
                'build/vendor/bootstrap/js/bootstrap.bundle.js',
                'build/vendor/picturefill/js/picturefill.js',
                'build/vendor/custom-file-input/js/custom-file-input.js',
                'build/vendor/aos/js/aos.js',
                'build/vendor/swiper/js/swiper.js',
                'build/js/main.js',
                'build/js/cart.js'
            ]
        }
    }
};
