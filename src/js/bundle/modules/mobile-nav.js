// Instruments
import bodyScrollLock from '../../vendor/bodyScrollLock';

class MobileNav {
    constructor(hamburgerClass, navClass, activeClass) {
        this.selector = {
            activeClass,
            hamburgerClass: `.${hamburgerClass}`,
            navClass: `.${navClass}`,
        };
        this.el = {
            hamburger: document.querySelector(this.selector.hamburgerClass),
            mobileNav: document.querySelector(this.selector.navClass),
        };
        this.windowResize = window.matchMedia('(min-width: 992px)');
        this.listen();
    }

    listen() {
        const self = this;
        if (self.el.hamburger && self.el.mobileNav) {

            self.el.hamburger.addEventListener('click', (e) => {
                // prevent page reloading
                e.preventDefault();
                // show mobile nav
                self.el.hamburger.classList.toggle(self.selector.activeClass);
                self.el.mobileNav.classList.toggle(self.selector.activeClass);
                // prevent page scrolling while mobile nav is shown
                if (self.el.hamburger.classList.contains(self.selector.activeClass)) {
                    bodyScrollLock.disableBodyScroll(self.el.mobileNav)
                } else {
                    bodyScrollLock.enableBodyScroll(self.el.mobileNav)
                }
            })

            self.windowResize.addListener(function (e) {
                if(e.matches) {
                    self.el.hamburger.classList.remove(self.selector.activeClass);
                    self.el.mobileNav.classList.remove(self.selector.activeClass);
                    bodyScrollLock.enableBodyScroll(self.el.mobileNav)
                }
            });
        }
    };
}

export default MobileNav;