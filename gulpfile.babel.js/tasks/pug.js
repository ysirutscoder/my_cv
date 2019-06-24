// Core
const { src, dest } = require('gulp');

// Plugins
import pugPlugin from 'gulp-pug';
import errorHandler from 'gulp-error-handle';
import browserSync from 'browser-sync';

// Task
const pug = () => {
    return src('./src/pug/*.pug')
        .pipe(errorHandler())
        .pipe(pugPlugin({
                basedir: __dirname + '/src/pug/',
                pretty: '    '
            }
        ))
        .pipe(dest('./dist/'))
        .on('end', browserSync.reload)
};

export default pug;