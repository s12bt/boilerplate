'use strict';
var fs = require('fs');
var gulp = require('gulp');
var rename = require('gulp-rename');
var del = require('del');
var symlink = require('gulp-symlink');
var connect = require('gulp-connect');
var less = require('gulp-less');
var plumber = require('gulp-plumber'); //エラーが起きても中断させない, lessコンパイル時


gulp.task('scaffold', function(callback){
  //同期処理
  var wait_max = 4;
  var wait_count = 0;

  function onEnd() {
    if (wait_max === ++wait_count) {
      // callbackを実行してgulpにタスク完了を通知
      callback();
    }
  }

  //jquery,bootstrap,font-awesomeを作業ディレクトリにコピー
  gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe( gulp.dest('./assets/components/jquery/')).on('end', function() {
    onEnd();
  });;
  gulp.src('./node_modules/jquery/dist/jquery.min.map')
    .pipe( gulp.dest('./assets/components/jquery/')).on('end', function() {
    onEnd();
  });;
  gulp.src('./node_modules/bootstrap/**/*')
    .pipe( gulp.dest('./assets/components/bootstrap/')).on('end', function() {
    onEnd();
  });;
  gulp.src('./node_modules/font-awesome/**/*')
    .pipe( gulp.dest('./assets/components/font-awesome/')).on('end', function() {
    onEnd();
  });;
});

gulp.task('setup', ['scaffold'], function(callback){
  //bootstrapファイルにそのまま触らないように、variables.lessだけ作業ディレクトリにコピーして、bootstrap/lessにはシンボリックリンク作成
  // bootstrap.override.lessがあるかどうかのチェック
  fs.exists('./assets/less/bootstrap.variables.override.less', function(exists) {
    if (!exists) {
      gulp.src('./assets/components/bootstrap/less/variables.less')
        .pipe( rename('bootstrap.variables.override.less'))
        .pipe( gulp.dest('./assets/less/'));
      return console.log("Copy: assets/components/bootstrap/less/variables.less -> assets/less/bootstrap.variables.override.less");
    } else {
      console.log("Already exist bootstrap.variables.override.less");
    }
  });
  // bootstrap/less/variables.less -> bootstrap/less/original.variables.less,
  gulp.src('./assets/components/bootstrap/less/variables.less')
    .pipe( rename('original.variables.less'))
    .pipe( gulp.dest('./assets/components/bootstrap/less'))
    .on('end', function(){
      del('./assets/components/bootstrap/less/variables.less');
    })
    .on('end', function(){
      gulp.src('./assets/less/bootstrap.variables.override.less')
        .pipe(symlink('./assets/components/bootstrap/less/variables.less'))
        .on('end', callback);
    });
});

// less compile
gulp.task('less', function () {
  gulp.src('./assets/less/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(connect.reload());
  gulp.src('./assets/components/bootstrap/less/bootstrap.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./assets/components/bootstrap/dist/css/'))
    .pipe(connect.reload());
  gulp.src('./assets/components/bootstrap/less/theme.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./assets/components/bootstrap/dist/css/'))
    .pipe(connect.reload());
});
// watch
gulp.task('watch', function(){
  gulp.watch('./assets/less/*.less', ['less']);
  gulp.watch('./views/*.html', ['less']);
});

// server
gulp.task('server', function(){
  connect.server({
    port:8000,
    livereload : true
  });
});

gulp.task('default', ['watch', 'server']);