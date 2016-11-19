/**
 * Created by Page on 2016/11/19.
 */

'use strict';

//1.    LESS编译 压缩 合并 (lee合并不多，一般是@导包)
//2.    JS文件合并 压缩 混淆
//3.    img复制
//4.    html压缩

//载入包
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');



// 1 .
gulp.task('style',function(){
    gulp.src(['src/styles/*.less','!src/styles/_*.less'])
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.reload({
            stream:true
        }));

});


var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//2 js合并 压缩 混淆
gulp.task('script',function(){
   gulp.src('src/scripts/*.js')
       .pipe(concat('all.js'))
       .pipe(uglify())
       .pipe(gulp.dest('dist/scripts'))
       .pipe(browserSync.reload({
           stream:true
       }));
});

var browserSync = require('browser-sync');

gulp.task('serve',function(){
   browserSync({server:{
       baseDir:['dist']
            },
   },function(err,bs){
       console.log(bs.options.getIn(["urls","local"]));
   });
    gulp.watch('src/styles/*.less',['style']);
    gulp.watch('src/scripts/*.js',['script']);
   // gulp.watch('src/images/*.*',['image']);
    //gulp.watch('src/*.html',['html']);
});



