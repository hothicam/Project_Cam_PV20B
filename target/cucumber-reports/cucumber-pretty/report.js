$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/customerLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Login",
  "description": "",
  "id": "customer-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Customer Login",
  "description": "",
  "id": "customer-login;customer-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I Open banking website http://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click Customer Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I chose your name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I chose name",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 23
    }
  ],
  "location": "cucumberLoginTest.Open_banking_website(String)"
});
formatter.result({
  "duration": 9768026000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.clickCustomerLogin()"
});
formatter.result({
  "duration": 6303304800,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.chose_your_name()"
});
formatter.result({
  "duration": 6279164300,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.chose_name()"
});
formatter.result({
  "duration": 6252991200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Customer Login",
  "description": "",
  "id": "customer-login;customer-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I Open banking website \u003cwebsite\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click Customer Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I chose your name",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I chose name",
  "keyword": "When "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "customer-login;customer-login;",
  "rows": [
    {
      "cells": [
        "website"
      ],
      "line": 18,
      "id": "customer-login;customer-login;;1"
    },
    {
      "cells": [
        "http://www.way2automation.com/angularjs-protractor/banking/#/login"
      ],
      "line": 19,
      "id": "customer-login;customer-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Customer Login",
  "description": "",
  "id": "customer-login;customer-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I Open banking website http://www.way2automation.com/angularjs-protractor/banking/#/login",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click Customer Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I chose your name",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I chose name",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 23
    }
  ],
  "location": "cucumberLoginTest.Open_banking_website(String)"
});
formatter.result({
  "duration": 6625439000,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.clickCustomerLogin()"
});
formatter.result({
  "duration": 6098584500,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.chose_your_name()"
});
formatter.result({
  "duration": 6282023300,
  "status": "passed"
});
formatter.match({
  "location": "cucumberLoginTest.chose_name()"
});
formatter.result({
  "duration": 6284394500,
  "status": "passed"
});
});