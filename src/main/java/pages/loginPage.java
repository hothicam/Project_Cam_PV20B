package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class loginPage {
private WebDriver driver;

@FindBy(xpath = "/html/body/div[3]/div/div[2]/div/div[1]/div[1]/button")
    WebDriver customerButton;


public loginPage(WebDriver driver) throws InterruptedException{
    this.driver = driver;
    PageFactory.initElements(driver, this);
}

}
