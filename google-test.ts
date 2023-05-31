import { Builder, By, Key, WebDriver, until } from "selenium-webdriver";
import { describe, it, before, after } from "mocha";

describe("Test Google home page", () => {
  let driver: WebDriver;

  before(() => (driver = new Builder().forBrowser("chrome").build()));

  it("page loads and renders", async function () {
    this.timeout(100 * 1000);
    await driver.get("https://www.google.com");
    const query = await driver.findElement(By.css("[name=q]"));
    await query.sendKeys("browserstack");

    // find first span containing our search result
    const search1 = await driver.wait(until.elementLocated(By.xpath('//span[text()="browserstack"]')));
    await search1.click();

    await driver.wait(until.titleContains("browserstack"));
  });

  after(() => driver.quit());
});
