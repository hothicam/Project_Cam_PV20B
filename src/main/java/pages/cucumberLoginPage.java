package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class cucumberLoginPage {

    private WebDriver driver;

    @FindBy(xpath = "/html/body/div[3]/div/div[2]/div/div[1]/div[1]/button")
    WebElement customerLogin;
    @FindBy(id = "userSelect")
    WebElement yourName;
    @FindBy(xpath = "/html/body/div[3]/div/div[2]/div/form/div/select/option[3]")
    WebElement Name;
    @FindBy(xpath = "/html/body/div[3]/div/div[2]/div/form/button")
    WebElement buttonLogin;

    public cucumberLoginPage(WebDriver driver) throws InterruptedException{
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void clickOpenWebsite() throws InterruptedException {
        customerLogin.click();
    }
    public void choseYourName() throws InterruptedException {
        yourName.click();
    }
    public void choseName() throws InterruptedException {
        Name.click();
    }

}
