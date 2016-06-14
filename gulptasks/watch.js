var gulp = require('gulp');

gulp.task('watch:server', function(){
    gulp.watch(['./api/**/*', ['build:yaml']]);
});

gulp.task('watch', [
    'watch:server'
]);
