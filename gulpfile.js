var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src('app/css/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});

gulp.task('autoprefixer', function() {
    gulp.src('app/css/styles.scss')
    .pipe(autoprefixer({
        browser: ['last 2 versions']
    }))
    .pipe(gulp.dest('dest/css'));
});

gulp.task('watch', ['browserSync', 'sass'], function() {

    gulp.watch('app/css/*.scss', ['sass']);
    gulp.watch('app/**/*.*', browserSync.reload);
});

