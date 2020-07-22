const { setWorldConstructor } = require("cucumber");
const puppeteer = require("puppeteer");
const { expect } = require("chai");

const PAGE = "https://demo.melco-dxeng.com/styleguide/";
// const PAGE = "http://127.0.0.1:8081";

class TodoWorld {
  async openPage() {
    this.browser = await puppeteer.launch({
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage"
      ]
    });
    this.page = await this.browser.newPage();
    await this.page.goto(PAGE, { timeout: 10000 });
  }
  async checkPageContent(expected) {
    await this.page
      .$eval("ul", function(test) {
        return test.innerText;
      })
      .then(function(result) {
        expect(result).contain(expected);
      });
  }
  async closePage() {
    await this.browser.close();
  }
}
setWorldConstructor(TodoWorld);
