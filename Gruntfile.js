module.exports = function (grunt) {
	"use strict";

	// Load npm tasks
	grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
	grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-test");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-cssmin");

	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8080,
					base: ".", 
					livereload: true,
					open: true
				}
			}
		},

		watch: {
			files: ["webapp/**/*"],
			tasks: ["build"],
			options: {
				port: 35730
			}
		},

		copy: {
			copyIndexToDist: { 
				src: "index.html",
				dest: "dist/index.html"
			},
			copyToDbg: {
				expand: true,
				cwd: "webapp",
				src: ["**/*"],
				dest: "dist/debug/"
			},
			copyToTmp: {
				expand: true,
				cwd: "webapp",
				src: ["**/*"],
				dest: "tmp/"
			},
			copyDbgToDist: {
				expand: true,
				cwd: "dist/debug/",
				src: ["**/*"],
				dest: "dist/"
			},
			copyJSONToDist: { 
				expand: true,
				cwd: "webapp/model",
				src: ["**/*.json"],
				dest: "dist/model/"
			}
		},

		clean: {
			build: ["dist", "tmp"]
		},

		cssmin: {
			target: {
				files: {
					'webapp/css/style.min.css': ['webapp/css/style.css']
				}
			}
		}
	});

	grunt.registerTask("default", ["clean", "build"]);
	grunt.registerTask("serve", ["connect:server", "watch"]);
	grunt.registerTask("build", ["clean", "cssmin", "copy:copyIndexToDist", "copy:copyToDbg", "copy:copyJSONToDist"]);
	grunt.registerTask("unit_and_integration_tests", ["test"]);
};
