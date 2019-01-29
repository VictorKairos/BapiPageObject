module.exports = {

    secureAreaText: 'ENTRA EN BLOCKCHAIN',
    rolAreaText: 'Alta eficiencia',
    menuVentasAreaText: 'ISDA Contracts',
    elements: {
        secureAreaBanner:  by.css('h2.form-title'),
        menuVentasAreaBanner:  by.css('ul.sub-menu-list.nav-link.side__menu-link'),
        rolAreaBanner:  by.css('span.title-third')
    },

    /**
     * Asserts if the Heroku Login Secure Area is Loaded
     * @returns {Promise} a promise
     */
    checkSecureAreaLoaded: function () {
        return driver.findElement(page.herokuLoginSecureAreaPage.elements.secureAreaBanner).getText()
        .then(function (value) {
          expect(value).to.equal(page.herokuLoginSecureAreaPage.secureAreaText);
        });
    },

    checkMenuAreaLoaded: function () {
        return driver.findElement(page.herokuLoginSecureAreaPage.elements.menuVentasAreaBanner).getText()
        .then(function (value) {
          expect(value).to.equal(page.herokuLoginSecureAreaPage.menuVentasAreaText);
        });
    },

    checkRolAreaLoaded: function () {
        return driver.findElement(page.herokuLoginSecureAreaPage.elements.rolAreaBanner).getText()
        .then(function (value) {
          expect(value).to.equal(page.herokuLoginSecureAreaPage.rolAreaText);
        });
    }
};
