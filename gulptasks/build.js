var gulp = require('gulp')
    , runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(callback){
	runSequence(['build:yaml'], callback);
});
