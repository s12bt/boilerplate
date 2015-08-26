var http = require("http");
var fs = require("fs");

module.exports = function(grunt){

  // プラグイン読み込み
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-symlink");

  grunt.initConfig({
    less: {
      development: {
        files: {
          //css file : less file
          "assets/components/bootstrap/dist/css/bootstrap.css":"assets/components/bootstrap/less/bootstrap.less",
         "assets/components/bootstrap/dist/css/bootstrap-theme.css":"assets/components/bootstrap/less/theme.less",
          "assets/css/style.css":"assets/less/style.less"
        }
      },
      production: {
        options: {
          cleancss: true
        },
        files: {
          //css file : less file
          "assets/components/bootstrap/dist/css/bootstrap.css":"assets/components/bootstrap/less/bootstrap.less",
         "assets/components/bootstrap/dist/css/bootstrap-theme.css":"assets/components/bootstrap/less/theme.less",
          "assets/css/style.css":"assets/less/style.less"
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      //監視対象とするファイル
      files: ["assets/less/*.less", "assets/js/*.js", "*.html"],
      //変更があったときのタスク
      tasks: ["less:development"]
    },

    connect: {
      development: {
        options: {
          base: "./"
        }
      }
    },
    symlink: {
      options: {
        overwrite: true
      },
      explicit: {
        src: "assets/less/bootstrap.variables.override.less",
        dest: "assets/components/bootstrap/less/variables.less"
      }
    }
  });

  //タスク実行
  grunt.registerTask('default', ["connect:development","watch"]);


  grunt.registerTask("scaffold", function(){
    grunt.file.copy("node_modules/jquery/dist/jquery.min.js", "assets/components/jquery/jquery.min.js");
    grunt.file.copy("node_modules/jquery/dist/jquery.min.map", "assets/components/jquery/jquery.min.map");
    grunt.file.copy("assets/components/bootstrap/less/variables.less", "assets/less/bootstrap.variables.override.less");

    grunt.task.run(["symlink"]);
    grunt.task.run(["less:development"]);
  });

};