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
          "assets/css/style.css":"assets/bootstrap/less/bootstrap.less"
        }
      },
      production: {
        options: {
          cleancss: true
        },
        files: {
          //css file : less file
          "assets/css/style.css":"assets/bootstrap/less/bootstrap.less"
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      //監視対象とするファイル
      files: ["assets/bootstrap/less/*.less","assets/js/*.js", "*.html"],
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
    grunt.file.copy("node_modules/jquery/dist/jquery.min.js", "assets/js/jquery.min.js");
    grunt.file.copy("node_modules/jquery/dist/jquery.min.map", "assets/js/jquery.min.map");
  });

}