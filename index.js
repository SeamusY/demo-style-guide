var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  jsonFile: "report/cucumber_report.json",
  output: "report/cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "DEV",
    "Platform": "Windows 10",
    "Browser": "Chrome  54.0.2840.98",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
