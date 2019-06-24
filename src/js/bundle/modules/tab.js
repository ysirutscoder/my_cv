export class Tab {
    constructor({
        tab, tabItem, tabContent, activeClass,
    }) {
        this.selector = {
            tabClass: tab,
            tabItemClass: tabItem,
            tabContentClass: tabContent,
            activeClass,
        };
        this.tab = document.querySelector(this.selector.tabClass);
        this.showTab();
    }

    showTab() {
        const self = this;
        if (self.tab) {
            const tabItems = self.tab.querySelectorAll(self.selector.tabItemClass);

            tabItems.forEach(item => (
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    const itemAct = self.tab.querySelector(`${self.selector.tabItemClass}.${self.selector.activeClass}`);
                    const contentAct = self.tab.querySelector(`${self.selector.tabContentClass}.${self.selector.activeClass}`);
                    itemAct.classList.remove(self.selector.activeClass);
                    contentAct.classList.remove(self.selector.activeClass);
                    const id = this.getAttribute('href');
                    this.classList.add(self.selector.activeClass);
                    self.tab.querySelector(id).classList.add(self.selector.activeClass);
                })));
        }
    }
}
