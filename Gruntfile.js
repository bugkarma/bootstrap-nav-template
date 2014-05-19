module.exports = function(grunt) {

  grunt.initConfig({
    copyto: {
      options: { ignore: ['**/*.js', '**/sass{,/**/*}', '**/images/sprites{,/**/*}'] },
      dev: { files: [ {cwd: 'src/', src: ['**/*'], dest: 'build/dev/'} ] },
      stage: { files: [ {cwd: 'src/', src: ['**/*'], dest: 'build/stage/'} ] },
      release: { files: [ {cwd: 'src/', src: ['**/*'], dest: 'build/release/'} ] }
    },

    compass: {
      options: { sassDir: 'src/sass', imagesDir: 'src/images' },
      dev: { options: { outputStyle: 'expanded', cssDir: 'build/dev/css', generatedImagesDir: 'build/dev/images' } },
      stage: { options: { outputStyle: 'compact', cssDir: 'build/stage/css', generatedImagesDir: 'build/stage/images' } },
      release: { options: { outputStyle: 'compressed', cssDir: 'build/release/css', generatedImagesDir: 'build/release/images' } }
    },

    jshint: {
      files: ['src/js/**/*.js'],
      options: { globals: { jQuery: true, console: true, module: true, document: true } }
    },

    uglify: { 
      dev: { options: { beautify: true, compress: false, mangle: false }, files: [{ expand: true, cwd: 'src/js', src: '**/*.js', dest: 'build/dev/js' }] },
      stage: { options: { mangle: false }, files: [{ expand: true, cwd: 'src/js', src: '**/*.js', dest: 'build/stage/js' }] },
      release: { options: { report: true }, files: [{ expand: true, cwd: 'src/js', src: '**/*.js', dest: 'build/release/js' }] }
    },

    concat: {
      options: { separator: ';' }
      //dist: { src: ['src/**/*.js'], dest: 'release/<%= pkg.name %>.js' }
    },

    //clean: { src: ['src/'] },

    watch: {
      files:  { files: 'src/**/*.*', tasks: ['copyto:dev'] },
      css:    { files: 'src/**/*.scss', tasks: ['compass:dev'] },
      js:     { files: ['<%= jshint.files %>'], tasks: ['jshint','uglify:dev'] }
    }

  });

  grunt.loadNpmTasks('grunt-copy-to');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task
  grunt.registerTask('default', ['copyto', 'compass', 'jshint', 'uglify', 'concat']);                           // Default

  // Target specific tasks
  grunt.registerTask('dev', ['copyto:dev', 'compass:dev', 'jshint', 'newer:uglify:dev', 'concat']);             // Dev
  grunt.registerTask('stage', ['copyto:stage', 'compass:stage', 'jshint', 'uglify:stage', 'concat']);           // Stage
  grunt.registerTask('release', ['copyto:release', 'compass:release', 'jshint', 'uglify:release', 'concat']);   // Release
};