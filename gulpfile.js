const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
// const sass = require('gulp-sass'); // sass -> css
const minifyCSS = require('gulp-minify-css')

gulp.task('sass', async function () {
  return gulp.src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
    // .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    // .pipe(minifyCSS())
    // .pipe(gulp.dest('dist/css'))
})
// gulp.watch('components/css/**/*.scss', ['sass111']);