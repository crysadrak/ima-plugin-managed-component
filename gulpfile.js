
let del = require('del');
let gulp = require('gulp');
let babel = require('gulp-babel');
let runSequence = require('run-sequence');

gulp.task('prepare-package', (done) => {
	return runSequence(
		'clean',
		'build',
		'copy-metadata',
		done
	);
});

gulp.task('copy-metadata', () => {
	return gulp.src(['./LICENSE', './package.json', './README.md'])
		.pipe(gulp.dest('./dist'))
});

gulp.task('clean', () => {
	return del([
		'./dist'
	]);
});

gulp.task('build', () => {
	return gulp.src('./src/**/!(*Spec).js')
		.pipe(babel({
			moduleIds: true,
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./dist'));
});
