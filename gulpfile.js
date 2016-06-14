var gulp = require('gulp')
	, requireDir = require('require-dir')('./gulpTasks')
	, runSequence = require('run-sequence').use(gulp);

gulp.task('default', function(callback){
	runSequence('build', [
		'serve'
	], callback);
});
