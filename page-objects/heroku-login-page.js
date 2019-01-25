module.exports = {

    url: 'http://the-internet.herokuapp.com/login',

    elements: {
        userNameField:  by.css('input#username'),
        passwordField:  by.css('input#password'),
        loginBtn:       by.css('button.radius')
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
    }
};
