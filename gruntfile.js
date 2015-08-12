module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-coffee');

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
        coffee: {
            compile: {
                files: {
                    'dist/paradeiser.js': 'dev/paradeiser.coffee' // 1:1 compile
                }
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                sourceMapName: 'dist/min/paradeiser.min.js.map'
            },
            my_target: {
                files: {
                    'dist/min/paradeiser.min.js': ['dist/paradeiser.js']
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
        watch: {
            styles: {
                files: ['dev/*.scss', 'dev/*.coffee'], // which files to watch
                tasks: ['sass', 'postcss', 'coffee'],
                options: {
                    nospawn: true,
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['sass', 'coffee', 'uglify', 'postcss']);
};