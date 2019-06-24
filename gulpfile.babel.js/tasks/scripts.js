// Core
import { src, dest } from 'gulp';

// Plugins
import browserSync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import terser from 'gulp-terser';
import rollup from 'gulp-rollup';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Task
const scripts = (cb) => {
    return src('./src/js/bundle/app.js')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(rollup({
            allowRealFiles: true,
            input: './src/js/bundle/app.js',
            output: {
                format: 'iife',
            },
            plugins: [
                resolve(),
                commonjs()
            ]
        }))
        .pipe(
            babel({
                presets: ['@babel/env']
            })
        )
        .pipe(terser())
        .pipe(rename('bundle.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('./dist/js/'))
        .pipe(browserSync.reload({stream: true}));
    cb();
};

const eslintScripts = (cb) => {
    return src(['./src/js/bundle/**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.result(result => {
            console.log(`ESLint result: ${result.filePath}`);
            console.log(`# Errors: ${result.errorCount}`);
        }))
        .pipe(eslint.format());
    cb();
};

export {scripts, eslintScripts };