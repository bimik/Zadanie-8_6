module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      
    jshint: {
        all: ['js/*.js']
    }, 
      
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'main.css': 'main.sass'
  			}
  		}
  	},
    //image grunt
  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'images/build/'
  			}]
  		}
  	},
      
      watch: {
          scripts: {
            files: ['sass/*.sass'],
            tasks: ['sass'],
            options: {
                spawn: false,
        },
    } 
}
      

/* block comment */
      

  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  
  grunt.registerTask('default', ['sass', 'imagemin', 'jshint']);
};