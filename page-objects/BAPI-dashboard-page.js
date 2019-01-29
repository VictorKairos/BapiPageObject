module.exports = {

    url: 'http://0.0.0.0:8000/dashboard',

    elements: {
        userMenu:       by.css('div.header__user-detail'),
        logOutBtn:      by.css('button.btn-outline-primaryMenu.menu-selected'),
        menuBtn:        by.css('div.showMenu-btn.showMenu-btnDetail.menu-selected')
    },

    clickLogout: function () {
        return driver.findElement(this.elements.logOutBtn)
        .click();
    },
    unfoldMenu: function () {
        return driver.findElement(this.elements.menuBtn)
        .click();
    },
    loadPage: function () {
        return helpers.loadPage(this.url);
    },
    isLoaded: function () {
        for (element in this.elements) { 
            driver.findElement (element);
        }
    }
};
