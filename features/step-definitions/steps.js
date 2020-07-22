const { Given, When, Then, After, Before } = require("cucumber");

Before(async function(testcase) {
  return await this.openPage();
});

After(async function() {
  return await this.closePage();
});
When("I open homepage", async function() {
  return true;
});
Then("I should see a styleguide with {string}", async function(expected) {
  return await this.checkPageContent(expected);
});
