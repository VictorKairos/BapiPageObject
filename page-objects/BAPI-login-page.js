module.exports = {

    url: 'http://0.0.0.0:8000/login?',

    elements: {
        userNameField:  by.css('input#username'),
        // passwordField:  by.css('input#password'),
        passwordField:  by.css('input#password.form-control.credentials-btn'),
        loginBtn:       by.css('button.btn.btn-primary.login-tutorial')
    },

    /**
     * enters credential values to login into the Heroku Login Sample
     * @param {string} userName
     * @param {string} pass
     * @returns {Promise} a promise 
     */
    loginAs: function (userName, pass) {
        return driver.findElement(this.elements.userNameField).sendKeys(userName)
        .then(function () {
            // driver.findElement(this.elements.passwordField).sendKeys(pass)
            driver.findElement(page.BAPILoginPage.elements.passwordField).sendKeys(pass)
        });
    },
    clickLogin: function () {
        return driver.findElement(this.elements.loginBtn)
        .click();
    },
    loadPage: function () {
        return helpers.loadPage(this.url);
    }
};
