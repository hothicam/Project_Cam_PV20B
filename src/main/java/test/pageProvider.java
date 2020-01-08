package test;

import org.openqa.selenium.support.PageFactory;
import pages.cucumberLoginPage;
import pages.loginPage;
import runner.TestRunner;

public class pageProvider {
    private static loginPage login;
    private static cucumberLoginPage cucumberLogin;

    public  static loginPage getLogin(){
        if (login == null){
            login = PageFactory.initElements(TestRunner.driver, loginPage.class);
        }
        return login;
    }

    public  static cucumberLoginPage getCucumberLoginTest(){
        if (cucumberLogin == null){
            cucumberLogin = PageFactory.initElements(TestRunner.driver, cucumberLoginPage.class);
        }
        return cucumberLogin;
    }
}
