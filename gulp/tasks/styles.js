var gulp = require('gulp')
,postcss = require('gulp-postcss')
,autoprefixer = require('autoprefixer')
,cssvars = require('postcss-simple-vars')
,nested = require('postcss-nested')
,cssImport = require('postcss-import')
,mixins = require('postcss-mixins')
,hexrgba = require('postcss-hexrgba');

gulp.task('styles', function () {
	console.log('css proccessed');
	return gulp.src('./app/assets/styles/style.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba,autoprefixer]))
	.on('error', function (errorInfo) {
		console.log(errorInfo.toString());
		console.log('there is an error, but I dont know yet how to show what error');
		this.emit('end')
	})
	.pipe(gulp.dest('./app/temp/styles'));
});