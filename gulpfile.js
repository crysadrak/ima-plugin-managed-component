
let gulp = require('gulp');
let babel = require('gulp-babel');

// build module
gulp.task('build', () => {
	return (
		gulp.src('./src/**/!(*Spec).js')
			.pipe(babel({
				moduleIds: true,
				presets: ['es2015']
			}))
			.pipe(gulp.dest('./dist'))
	);
});
