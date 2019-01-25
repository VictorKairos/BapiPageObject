module.exports = {

    secureAreaText:     'You logged into a secure area!\n×',

    elements: {
        secureAreaBanner:  by.css('div#flash.flash.success')
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
    }
};
