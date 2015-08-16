var gulp = require('gulp');
var glob = require('glob');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    browserify('./src/javascripts/app.jsx', {debug: true })
        .transform(babelify)
        .bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(source('public/javascripts/bundle.js'))
        .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
    gulp.watch('./src/javascripts/**/*.{js,jsx}', ['browserify'])
});

gulp.task('default', ['browserify', 'watch']);
