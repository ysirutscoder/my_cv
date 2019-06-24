// Core
import {src, dest} from 'gulp';

// Plugins
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';

// Task
const svgSprite = () => {
    return src(['./src/svg-icons/**/*.svg'])
        .pipe(
            svgstore({
                inlineSvg: true,
            })
        )
        .pipe(rename('sprite.svg'))
        .pipe(dest('./dist/icons/'))
        .on('end', browserSync.reload)
};

export default svgSprite;