var gulp = require('gulp');
var clean   = require('gulp-clean');
var manifest = require('../../config').manifest;
var assetManifest = require('gulp-asset-manifest');
 
gulp.task('data-clean', function () {
    return gulp.src(['./_dev/_data/images.json','./_dev/_data/jekyll.json','./_dev/_data/scripts.json','./_dev/_data/style.json'])
        .pipe(clean());
});


gulp.task('data-jekyll', function () {
    return gulp.src(['./_build/_themes/dc-theme/_includes/**/*.*','./_build/_themes/dc-theme/_layouts/**/*.*'])
    .pipe(assetManifest({
        bundleName: manifest.jekyllBundle,
        manifestFile:manifest.jekyllDest,
        log:true
    }));
});
