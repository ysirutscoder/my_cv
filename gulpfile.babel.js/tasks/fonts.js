// Core
import {src, dest} from 'gulp';

// Task
const fonts = () => {
    return src('./src/fonts/**/*.{woff,woff2}')
        .pipe(dest('./dist/fonts'));
};

export default fonts;