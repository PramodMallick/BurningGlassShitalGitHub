$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("verify_AboutPage.feature");
formatter.feature({
  "line": 3,
  "name": "Verify About page functionality",
  "description": "As an employee of the company\nI want to login my employee profile using my credentials\nIn order to collaborate with my colleagues",
  "id": "verify-about-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@AboutPage"
    }
  ]
});
formatter.before({
  "duration": 4859244323,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the \"Company home\" page on URL \"https://www.burning-glass.com/uk\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see \"Burning Glass Technologies United Kingdom\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "https://www.burning-glass.com/uk",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 10258854652,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 9.222\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Pramods-MBP.broadband\u0027, ip: \u0027fd52:a81c:df85:1:1d13:cecf:1839:e75a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/9s/n5wnzqgj03z...}, goog:chromeOptions: {debuggerAddress: localhost:59157}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 162c3cc0049af4278769aa954a284ec7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat pages.HomePage.navigateToHomePage(HomePage.java:48)\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:29)\n\tat ✽.Given I am on the \"Company home\" page on URL \"https://www.burning-glass.com/uk\"(verify_AboutPage.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Burning Glass Technologies United Kingdom",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Verify Navigate to About page",
  "description": "",
  "id": "verify-about-page-functionality;verify-navigate-to-about-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I navigate to \"About\" page from top menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see \"About Us\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "below sections would be listed in \"About\" page",
  "rows": [
    {
      "cells": [
        "Schedule a Demo"
      ],
      "line": 16
    },
    {
      "cells": [
        "Find Your Solution"
      ],
      "line": 17
    },
    {
      "cells": [
        "Have questions for us?"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "About",
      "offset": 15
    }
  ],
  "location": "StepDefinitions.i_navigate_to_page_from_top_menu_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "About Us",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "About",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.below_sections_would_be_listed_in_page(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 60148435686,
  "status": "passed"
});
formatter.uri("verify_ResearchPage.feature");
formatter.feature({
  "line": 3,
  "name": "Verify Reserch page functionality",
  "description": "As an employee of the company\nI want to login my employee profile using my credentials\nIn order to collaborate with my colleagues",
  "id": "verify-reserch-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sanity"
    },
    {
      "line": 2,
      "name": "@ResearchPage"
    }
  ]
});
formatter.before({
  "duration": 1422813770,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the \"Company home\" page on URL \"https://www.burning-glass.com/uk\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see \"Burning Glass Technologies United Kingdom\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "https://www.burning-glass.com/uk",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 10010873745,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 9.207\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Pramods-MBP.broadband\u0027, ip: \u0027fd52:a81c:df85:1:1d13:cecf:1839:e75a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/9s/n5wnzqgj03z...}, goog:chromeOptions: {debuggerAddress: localhost:59372}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d34cff973dcc4c8df8de629bf9ea0029\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat pages.HomePage.navigateToHomePage(HomePage.java:48)\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:29)\n\tat ✽.Given I am on the \"Company home\" page on URL \"https://www.burning-glass.com/uk\"(verify_ResearchPage.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Burning Glass Technologies United Kingdom",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Verify Navigate to About page",
  "description": "",
  "id": "verify-reserch-page-functionality;verify-navigate-to-about-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I navigate to \"Research\" page from top menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see \"Insights based on real-time job data\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Research",
      "offset": 15
    }
  ],
  "location": "StepDefinitions.i_navigate_to_page_from_top_menu_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Insights based on real-time job data",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 70193002615,
  "status": "passed"
});
formatter.uri("verify_SolutinsPage.feature");
formatter.feature({
  "line": 3,
  "name": "Verify Solutions page functionality",
  "description": "As an employee of the company\nI want to login my employee profile using my credentials\nIn order to collaborate with my colleagues",
  "id": "verify-solutions-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@SolutionsPage"
    }
  ]
});
formatter.before({
  "duration": 1451040460,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the \"Company home\" page on URL \"https://www.burning-glass.com/uk\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see \"Burning Glass Technologies United Kingdom\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Company home",
      "offset": 13
    },
    {
      "val": "https://www.burning-glass.com/uk",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.i_am_on_the_page_on_URL(String,String)"
});
formatter.result({
  "duration": 10010293433,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 9.082\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Pramods-MBP.broadband\u0027, ip: \u0027fd52:a81c:df85:1:1d13:cecf:1839:e75a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/9s/n5wnzqgj03z...}, goog:chromeOptions: {debuggerAddress: localhost:59638}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0cfc4c16f1c97d5e55456b77bdeffd7d\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat pages.HomePage.navigateToHomePage(HomePage.java:48)\n\tat stepdefs.StepDefinitions.i_am_on_the_page_on_URL(StepDefinitions.java:29)\n\tat ✽.Given I am on the \"Company home\" page on URL \"https://www.burning-glass.com/uk\"(verify_SolutinsPage.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Burning Glass Technologies United Kingdom",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Navigate to Solutions page",
  "description": "",
  "id": "verify-solutions-page-functionality;navigate-to-solutions-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I navigate to \"Solutions\" page from top menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see \"Solutions\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "below sections would be listed in \"Solutions\" page",
  "rows": [
    {
      "cells": [
        "Corporations"
      ],
      "line": 16
    },
    {
      "cells": [
        "Education"
      ],
      "line": 17
    },
    {
      "cells": [
        "Government and Workforce"
      ],
      "line": 18
    },
    {
      "cells": [
        "Recruiting and Staffing"
      ],
      "line": 19
    },
    {
      "cells": [
        "Strategic Partnerships"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Solutions",
      "offset": 15
    }
  ],
  "location": "StepDefinitions.i_navigate_to_page_from_top_menu_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Solutions",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.i_should_see_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Solutions",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.below_sections_would_be_listed_in_page(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25160215086,
  "status": "passed"
});
});