Feature: Customer Login

  Scenario: Customer Login
    Given I Open banking website http://www.way2automation.com/angularjs-protractor/banking/#/login
    Then I click Customer Login button
    When I chose your name
    When I chose name

  Scenario Outline: Customer Login
    Given I Open banking website <website>
    Then I click Customer Login button
    When I chose your name
    When I chose name



    Examples:
      | website                                                            |
      | http://www.way2automation.com/angularjs-protractor/banking/#/login |