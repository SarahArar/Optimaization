import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('default', shell.task(['parcel starter/index.html --open']));
gulp.task('test shuffle function', shell.task(['parcel starter/test/shuffle.test.js']));
gulp.task('cypress', shell.task(['npx cypress run']));


