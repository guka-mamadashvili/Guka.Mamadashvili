const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Use the 'sass' package
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Define the SCSS source file(s) and destination directory for compiled CSS
const scssSrc = 'src/scss/**/*.scss';
const cssDest = 'dist/css';

// Create a 'sass' task to compile SCSS to CSS
gulp.task('sass', function () {
  return gulp.src(scssSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(cssDest));
});

// Create a 'watch' task to watch for changes in SCSS files
gulp.task('watch', function () {
  gulp.watch(scssSrc, gulp.series('sass'));
});

// Create a default task that runs the 'sass' task and then the 'watch' task
gulp.task('default', gulp.series('sass', 'watch'));
