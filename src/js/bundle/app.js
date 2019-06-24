// Core
import '../vendor/svgxuse'; // tested in Chrome, IE11, Edge, Firefox, Safari
import '../vendor/polyfill-forEach';
import '../vendor/polyfill-array-from';
import './modules/imageLazyLoading'; // tested in Chrome, IE11, Edge, Firefox, Safari
import picturefill from '../vendor/picturefill'; // tested in Chrome, IE11, Edge, Firefox, Safari


// Modules
import MobileNav from './modules/mobile-nav'; // tested in Chrome, IE11, Edge, Firefox, Safari
import { Tab } from './modules/tab'; // tested in Chrome, IE11, Edge, Firefox, Safari

// Modules init
document.addEventListener("DOMContentLoaded", () => {
    picturefill();


    const mobileNav = new MobileNav('hamburger', 'main-nav', "isActive");

    const tab = new Tab({
        tab: '.js-tab',
        tabItem: '.js-tab__link',
        tabContent: '.js-tab__content',
        activeClass: 'isActive',
    });

});
$('a[href^="#"]').on('click', function (event) {
    let target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});