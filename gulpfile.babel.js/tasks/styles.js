// Core
import { src, dest } from 'gulp';

// Plugins
import sourcemaps from 'gulp-sourcemaps';
import sass from'gulp-sass';
import postcss from'gulp-postcss';
import browserSync from 'browser-sync';
import gulpStylelint from 'gulp-stylelint';
sass.compiler = require('node-sass');
import postcssPresetEnv from 'postcss-preset-env';

const logError = (err) => {
    gutil.log(err);
    this.emit('end');
};

// Task
const styles = (cb) => {
    return src('./src/styles/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(
            sourcemaps.write({
                includeContent: false
            })
        )
        .pipe(
            sourcemaps.init({
                loadMaps: true
            })
        )
        .pipe(
            postcss([
                // autoprefixer(),
                postcssPresetEnv({
                    stage: 3,
                    browsers: 'last 2 versions'
                })
            ])
        )
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./dist/css'))
        .on('end', browserSync.reload)
    cb();
};

const stylelint = (cb) => {
    return src('./src/css/**/*.scss')
        .pipe(gulpStylelint({
            reporters: [
                {formatter: 'string', console: true}
            ]
    }));
    cb();
};

export {styles, stylelint};