var gulp = require('gulp')
    , nodemon = require('gulp-nodemon');

gulp.task('serve', function(){

    nodemon({
        script: './app.js',
        tasks: ['build:yaml'],
        ext: 'js yaml',
        ignore: ['api/swagger/{,/**/*}']
    });
});

// Bug in options.ignore pattern:
// https://github.com/JacksonGariety/gulp-nodemon/issues/24
// './client/**' should be 'client/** app'
