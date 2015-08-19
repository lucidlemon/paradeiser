module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass: {
            development: {
                options: {                       // Target options
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    "dist/paradeiser.css": "dev/paradeiser.scss" // destination file and source file
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer-core')({browsers: ['last 5 versions', 'ie 8', 'ie 9']}),
                    require('csswring')
                ]
            },
            dist: {
                src: ['dist/paradeiser.css'],
                dest: 'dist/min/paradeiser.min.css'
            }
        },
        csscomb: {
            options: {
                // Task-specific options go here.
            },
            your_target: {
                files: {
                    'dev/_paradeiser_core.scss': ['dev/_paradeiser_core.scss'],
                }
            }
        },
        watch: {
            styles: {
                files: ['dev/*.scss'], // which files to watch
                tasks: ['sass', 'postcss'],
                options: {
                    nospawn: true,
                    livereload: true
                }
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'paradeiser',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: false,
                regExp: false
            }
        }
    });

    grunt.registerTask('default', ['sass', 'postcss']);
};