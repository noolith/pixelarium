module.exports = function(grunt){

	grunt.initConfig({

		sass: {
			build: {
				files: {'dist/css/pixelarium.min.css': 'src/sass/main.scss'}
			}
		},

		coffee: {
			build: {
				files: {
					'dist/js/pixelarium.min.js': 'src/pixelarium/pixelarium.coffee',
				}
			}
		},

		copy: {
			build: {
				files: [
					{src: ['src/index.html'], dest: 'dist/index.html'},
				]
			},
			libs: {
				files: [
					{src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'dist/js/lib/jquery.min.js'},
					{src: ['bower_components/paper/dist/paper-full.min.js'], dest: 'dist/js/lib/paper.min.js'},
					{src: ['bower_components/mousetrap/mousetrap.min.js'], dest: 'dist/js/lib/mousetrap.min.js'},
				]
			}
		},

		clean: ['dist'],

		watch: {
			stylesheets: {
				files: 'src/sass/**',
				tasks: ['sass:build']
			},
			html: {
				files: 'src/index.html',
				tasks: ['copy:build'],
			},
			coffee: {
				files: 'src/**/*.coffee',
				tasks: ['coffee:build'],
			},
			js: {
				files: 'src/strip/**/*.js',
				tasks: ['copy:build'],
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-coffee');

	grunt.registerTask('default', ['clean', 'sass:build', 'copy:build', 'copy:libs', 'coffee:build']);
}