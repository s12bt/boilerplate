var http = require("http");
var fs = require("fs");

module.exports = function(grunt){

  // プラグイン読み込み
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.initConfig({
    less: {
      development: {
        files: {
          //css file : less file
          "assets/bootstrap/dist/bootstrap.css":"assets/bootstrap/less/bootstrap.less",
          "assets/bootstrap/dist/bootstrap-theme.css":"assets/bootstrap/less/theme.less",
          "assets/css/style.css":"assets/less/style.less"
        }
      },
      production: {
        options: {
          cleancss: true
        },
        files: {
          //css file : less file
          "assets/bootstrap/dist/bootstrap.css":"assets/bootstrap/less/bootstrap.less",
          "assets/bootstrap/dist/bootstrap-theme.css":"assets/bootstrap/less/theme.less",
          "assets/css/style.css":"assets/less/style.less"
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      //監視対象とするファイル
      files: ["assets/bootstrap/less/*.less", "assets/less/*.less", "assets/js/*.js", "*.html"],
      //変更があったときのタスク
      tasks: ["less:development"]
    },

    connect: {
      development: {
        options: {
          base: "./"
        }
      }
    }
  });

  //タスク実行
  grunt.registerTask('default', ["connect:development","watch"]);


  grunt.registerTask("scaffold", function(){
    grunt.file.delete("assets/bootstrap/.git");
    console.log("delete assets/bootstrap/.git");
    grunt.task.run(["less:development"]);
    grunt.file.copy("node_modules/jquery/dist/jquery.min.js", "assets/jquery/jquery.min.js");
    grunt.file.copy("node_modules/jquery/dist/jquery.min.map", "assets/jquery/jquery.min.map");
  });

};