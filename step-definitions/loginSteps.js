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

  this.When(/^I'm at the Heroku login page$/, function () {
    return page.herokuLoginPage.loadPage();
  });

  this.When(/^I click the Login$/, function () {
    return page.herokuLoginPage.clickLogin();
  });
  this.When(/^I click the Login rol$/, function () {
    return page.herokuLoginPage.clickLoginRol();
  });

  this.When(/^I click the menu rol$/, function () {
    return page.herokuLoginPage.clickMenuRol();
  });

  this.When(/^I am logged into the secure area$/, function () {
    return page.herokuLoginSecureAreaPage.checkSecureAreaLoaded();
  });

  this.When(/^I am logged into the right rol$/, function () {
    return page.herokuLoginSecureAreaPage.checkRolAreaLoaded();
  });

  this.When(/^I am logged into the right menu$/, function () {
    return page.herokuLoginSecureAreaPage.checkMenuAreaLoaded();
  });
};
