var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    uglifycss = require('gulp-uglifycss'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe( autoprefixer( 'last 2 version' ) )
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('server',function(){
    browserSync.init({
            server: {
                baseDir: "./"
            }
        });

        gulp.watch("*.html").on("change", reload);
        /* gulp.watch("sass/*.sass").on("change", reload);   */
        gulp.watch('sass/**/*.scss',['sass']).on("change", reload);
        gulp.watch("js/*.js").on("change", reload);
});

gulp.task('default', ['server'])