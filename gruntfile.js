// Inside your Gruntfile.js
module.exports = function (grunt) {
    // Define a zip task
    grunt.initConfig({
        zip: {
            'using-cwd': {
                cwd: 'bower_components/',
                src: ['bower_components/Paradeiser/*/*', 'bower_components/Paradeiser/*/*/*'],
                dest: 'paradeiser.zip'
            }
        }
    });

    // Load in `grunt-zip`
    grunt.loadNpmTasks('grunt-zip');
};