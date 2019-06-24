// Core
import { watch, parallel } from 'gulp';

// Tasks
import pug from './pug';
import { scripts, eslintScripts } from './scripts';
import { styles, stylelint } from './styles';
import svgSprite  from './svg-sprite';
import images from './images';

// Task
const watching = () => {
    watch('./src/pug/**/*.pug', parallel(pug));
    watch('./src/styles/**/*.scss', parallel(stylelint, styles));
    watch('./src/js/**/*.js', parallel(eslintScripts, scripts));
    watch('./src/svg-icons/**/*.svg', parallel(svgSprite));
    watch('./src/images/**/*', parallel(images));
};

export default watching;