Feature: Open banking page

  Scenario: Open banking website
    Given I Open website http://www.way2automation.com/angularjs-protractor/banking/#/login

  Scenario Outline: Open banking website
    Given I Open website <website>

    Examples:
      | website                                                            |
      | http://www.way2automation.com/angularjs-protractor/banking/#/login |