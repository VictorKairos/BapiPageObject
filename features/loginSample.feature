Feature: Login using a login webform
  Login into 'http://localhost:8000'

  Scenario: Login OK
    Given I'm at the URL "http://localhost:8000"
    # When I enter "tomsmith" as user and "SuperSecretPassword!" as password
    And I click the Login
    Then I am logged into the secure area

    Scenario: Chequeo ROL ventas
      Given I'm at the URL "http://localhost:8000/login"
      When I enter "VentasBancoA" as user and "secret" as password
      And I click the Login rol
      Then I am logged into the right rol
      And I click the menu rol
      Then I am logged into the right menu
