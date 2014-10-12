module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        jshint: {
            //all: ['app/js/app.js']
            src: ['app/js/*.js', 'src/aaa.js']
        },

        concat: {

            dist: {
                //src: ['scripts.js', 'scripts1.js','scripts2.js'],
                src: ['app/js/*.js'],
                dest: 'build/merged.js'
            }
        },

        uglify: {

            dist: {
                src: 'build/merged.js',
                dest: 'build/merged.min.js'
            }

        },

        shell: {

            multiple: {
                command: [
                    'rm -rf build/merged.js',
                    //'mkdir deploy',
                    'mv build/merged.min.js deploy/merged.min.js'
                ].join('&&') //Note that .join('&&') is used when you want Grunt to run multiple shell commands.
            }

        },

        // Arbitrary non-task-specific properties.
        my_property: 'whatever',
        my_src_files: ['app/js/*.js', 'app/lib/*.js']
    });

    //specify grunt-contrib-jshint as the npm task that needs to be loaded.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-shell');

    // Default task.
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'shell']);

    //This will register a new task called concat-min and will run only the concat and uglify tasks.
    grunt.registerTask('concat-min', ['concat','uglify']);

};