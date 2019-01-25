module.exports = function () {

  this.Given(/^I'm at the URL "([^"]*)"$/, function (url) {
    // Write code here that turns the phrase above into concrete actions
    return driver.url(url);
  });

  this.When(/^I enter "([^"]*)" as user and "([^"]*)" as password$/, function (user, pass) {
    // Write code here that turns the phrase above into concrete actions

    return driver.setValue();

  });

  this.When(/^I click the Login$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });

};
