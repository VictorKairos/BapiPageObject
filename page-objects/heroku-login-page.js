module.exports = {

    url: 'http://localhost:8000', // aparentemente su contenido no afecta

    elements: {
        userNameField:  by.css('input#username'),
        passwordField:  by.css('input#password'),
        loginBtn:       by.css('button.btn.btn-outline-primary.tutorial__button')
    },

    elementsRol: {
        userNameField:  by.css('input#username'),
        passwordField:  by.css('input#password'),
        loginBtn:       by.css('button.btn.btn-primary.login-tutorial')
    },
    elementsMenu: {
        pushBtn:       by.css('div.showMenu-btn.showMenu-btnDetail.menu-selected')
    },

    /**
     * enters credential values to login into the Heroku Login Sample
     * @param {string} userName
     * @param {string} pass
     * @returns {Promise} a promise
     */
    loginAs: function (userName, pass) {
        return driver.findElement(page.herokuLoginPage.elements.userNameField).sendKeys(userName)
        .then(function () {
          driver.findElement(page.herokuLoginPage.elements.passwordField).sendKeys(pass)
        });
    },
    clickLogin: function () {
        return driver.findElement(page.herokuLoginPage.elements.loginBtn)
        .click();
    },
    clickLoginRol: function () {
        return driver.findElement(page.herokuLoginPage.elementsRol.loginBtn)
        .click();
    },
    clickMenuRol: function () {
        return driver.findElement(page.herokuLoginPage.elementsMenu.pushBtn)
        .click();
    },
    loadPage: function () {
        return driver.url(page.herokuLoginPage.url);
    }
};
