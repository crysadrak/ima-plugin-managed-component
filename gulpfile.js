
let del = require('del');
let gulp = require('gulp');
let babel = require('gulp-babel');

exports.build = gulp.series(
	clean,
	gulp.parallel(
		build_js,
		copy
	)
);

function build_js() {
	return gulp
		.src('./src/**/!(*Spec).js')
		.pipe(babel({
			moduleIds: true,
			plugins: ['transform-es2015-modules-commonjs']
		}))
		.pipe(gulp.dest('./dist'));
}

function copy() {
	return gulp
		.src(['./LICENSE', './package.json', './README.md'])
		.pipe(gulp.dest('./dist'));
}

function clean() {
	return del('./dist');
}
