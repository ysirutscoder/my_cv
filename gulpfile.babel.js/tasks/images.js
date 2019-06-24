// Core
import {src, dest} from 'gulp';

// Plugins
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';

// Task
const images = () => {
    return src('./src/images/**/*')
        .pipe(newer('./dist/images'))
        .pipe(
            imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.jpegtran({progressive: true}),
                imagemin.optipng({optimizationLevel: 5}),
                imagemin.svgo({
                    plugins: [
                        {removeViewBox: false},
                        {cleanupIDs: false}],
                })
            ],
                {
                    verbose: false
                })
        )
        .pipe(dest('./dist/images'));
};

export default images;