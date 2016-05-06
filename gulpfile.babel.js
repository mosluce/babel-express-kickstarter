const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');

const paths = {
    es6: ['src/**/*.js'],
    es5: 'build/',
    sourceRoot: path.join(__dirname, 'src')
};

gulp.task('babel', () => {
    gulp.src(paths.es6)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.', {sourceRoot: paths.sourceRoot}))
        .pipe(gulp.dest(paths.es5));
});

gulp.task('default', ['babel']);
gulp.task('watch', ['default'], () => {
    gulp.watch(paths.es6, ['babel']);
});