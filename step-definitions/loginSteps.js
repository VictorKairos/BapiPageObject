module.exports = function () {

  this.Given(/^I'm at the URL "([^"]*)"$/, function (url) {
    return helpers.loadPage(url);
  });

  this.When(/^I enter "([^"]*)" as user and "([^"]*)" as password$/, function (user, pass) {
/*  

    // OLD WAY - Without PageObject
  var userNameSelector = 'input#username';
  var passNameSelector = 'input#password';
  return driver.findElement(by.css(userNameSelector)).sendKeys(user)
      .then(function () {
        driver.findElement(by.css(passNameSelector)).sendKeys(pass)
      });
  */

    // PAGE OBJECT APPROACH
    return page.herokuLoginPage.loginAs(user, pass);

  });

  this.When(/^I click the Login$/, function () {
    
    // // OLD WAY - Without PageObject
    // var loginBtnSelector = 'button.radius';
    // return driver.findElement(by.css(loginBtnSelector)).click();
  
    // PAGE OBJECT APPROACH
    return page.herokuLoginPage.clickLogin();
  });

  this.When(/^I am logged into the secure area$/, function () {
    // OLD WAY - Without PageObject
    // var secureAreaBanner = 'div#flash.flash.success';

    // return driver.findElement(by.css(secureAreaBanner)).getText()
    // .then(function (value) {
    //   expect(value).to.equal("You logged into a secure area!\n×");
    // });

    // PAGE OBJECT APPROACH
    return page.herokuLoginSecureAreaPage.checkSecureAreaLoaded();

  });
};