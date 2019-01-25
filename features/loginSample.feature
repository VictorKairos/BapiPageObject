Feature: Login using a login webform
  Login into 'http://the-internet.herokuapp.com/login'
  User: tomsmith
  Pass: SuperSecretPassword!

  Scenario: Login OK
    Given I'm at the URL "http://the-internet.herokuapp.com/login"
    When I enter "tomsmith" as user and "SuperSecretPassword!" as password
    And I click the Login
    Then I should see some results
