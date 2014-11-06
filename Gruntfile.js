var http = require("http");
var fs = require("fs");

module.exports = function(grunt){

  // プラグイン読み込み
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.initConfig({
    less: {
      development: {
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
    },

    copy: {
      scaffold: {
        files: [
          {
            expand: true,
            cwd: "node_modules/bootstrap",
            src: ["**"],
            dest: "assets/components/bootstrap"
          }
        ]
      }

    }
  });

  //タスク実行
  grunt.registerTask('default', ["connect:development","watch"]);


  grunt.registerTask("scaffold", function(){
    grunt.file.copy("node_modules/jquery/dist/jquery.min.js", "assets/components/jquery/jquery.min.js");
    grunt.file.copy("node_modules/jquery/dist/jquery.min.map", "assets/components/jquery/jquery.min.map");

    grunt.task.run(["copy:scaffold"]); //grunt.file.copyだとディレクトリがコピーできなかった
    grunt.file.copy("assets/components/bootstrap/less/variables.less", "assets/less/bootstrap.variables.override.less");

    //grunt.task.run(["less:development"]);
  });

};