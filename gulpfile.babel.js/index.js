'use strict';
// Core
import { series, parallel } from 'gulp';

// Tasks
import pug from './tasks/pug';
import { scripts, eslintScripts } from './tasks/scripts';
import { styles, stylelint } from'./tasks/styles';
import images from'./tasks/images';
import svgSprite from'./tasks/svg-sprite';
import fonts from'./tasks/fonts';
import watching from'./tasks/watching';
import serve from'./tasks/serve';
import clean from'./tasks/clean';

// Exports
export const start = parallel(series(pug, stylelint, styles, eslintScripts, scripts, fonts, images, svgSprite,), watching, serve);
export const build = series(clean(), parallel(pug, stylelint, styles, eslintScripts, scripts, images, svgSprite, fonts));

