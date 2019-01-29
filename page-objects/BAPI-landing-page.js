module.exports = {

    url: 'http://0.0.0.0:8000/',

    elements: {
        loginBtn:       by.css('button.btn.btn-outline-primary.tutorial__button')
    },

    clickLogin: function () {
        return driver.findElement(this.elements.loginBtn)
        .click();
    },
    loadPage: function () {
        return helpers.loadPage(this.url);
    }
};
