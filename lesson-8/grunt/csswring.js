module.exports = function (grunt, options) {
    return {
        options: {
            report: "gzip",
            removeAllComments: true,
            preserveHacks: true
        },

        vendor: {
            src: [
                'css/styles.min.css'
            ],

            dest: 'css/styles.min.css'
        }
    };
};
