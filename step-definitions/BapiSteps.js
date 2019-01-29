var BAPILandingPage = require('../page-objects/BAPI-landing-page');
var BAPILoginPage = require('../page-objects/BAPI-login-page');

module.exports = function () {

  this.Given(/^me encuentro en la pantalla de inicio de sesión de BAPI$/, function () {
    
    return BAPILandingPage.loadPage()
      .then(() => BAPILandingPage.clickLogin());
  });

  this.When(/^inicio sesion con usuario "([^"]*)" y contraseña "([^"]*)"$/, function (user, pass) {
    
    return BAPILoginPage.loginAs(user, pass);
  });

  this.Then(/^la aplicación muestra la pantalla principal$/, function () {
    
  });

  this.Then(/^el menú lateral muestra las siguientes opciones:$/, function (table) {
    
  });

};