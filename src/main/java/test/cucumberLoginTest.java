package test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.cucumberLoginPage;
import runner.TestRunner;

public class cucumberLoginTest extends pageProvider {

    @Given("^I Open banking website (.*)$")
    public void Open_banking_website(String website) throws InterruptedException{
        Thread.sleep(3000);
        TestRunner.driver.get(website);
        TestRunner.driver.manage().window().maximize();
        Thread.sleep(3000);
    }

    @Then("^I click Customer Login button$")
    public void clickCustomerLogin() throws InterruptedException {
        Thread.sleep(3000);
        getCucumberLoginTest().clickOpenWebsite();
        Thread.sleep(3000);
    }
    @When("^I chose your name$")
    public void chose_your_name() throws InterruptedException {
        Thread.sleep(3000);
        getCucumberLoginTest().choseYourName();
        Thread.sleep(3000);
    }
    @When("^I chose name$")
    public void chose_name() throws InterruptedException {
        Thread.sleep(3000);
        getCucumberLoginTest().choseName();
        Thread.sleep(3000);
    }




}
