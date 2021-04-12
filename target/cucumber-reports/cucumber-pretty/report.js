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
      "name": "@Sanity"
    },
    {
      "line": 2,
      "name": "@AboutPage"
    }
  ]
});
formatter.before({
  "duration": 2698886664,
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
  "duration": 5309050252,
  "status": "passed"
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
  "duration": 27744747,
  "status": "passed"
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
  "duration": 1017540228,
  "status": "passed"
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
  "duration": 10103517090,
  "status": "passed"
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
  "duration": 10032960432,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //h2[text()\u003d\u0027Schedule a Demo\u0027] (tried for 3 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat pages.AboutPage.verifySectionsAvailable(AboutPage.java:53)\n\tat stepdefs.StepDefinitions.below_sections_would_be_listed_in_page(StepDefinitions.java:82)\n\tat ✽.And below sections would be listed in \"About\" page(verify_AboutPage.feature:15)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[text()\u003d\u0027Schedule a Demo\u0027]\"}\n  (Session info: chrome\u003d89.0.4389.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Pramods-MBP.broadband\u0027, ip: \u0027fd52:a81c:df85:1:1d13:cecf:1839:e75a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/9s/n5wnzqgj03z...}, goog:chromeOptions: {debuggerAddress: localhost:51453}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 944641a48dff73393c5e1ddd0a35e7f8\n*** Element info: {Using\u003dxpath, value\u003d//h2[text()\u003d\u0027Schedule a Demo\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat pages.AboutPage.verifySectionsAvailable(AboutPage.java:53)\n\tat stepdefs.StepDefinitions.below_sections_would_be_listed_in_page(StepDefinitions.java:82)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat TestRunner.feature(TestRunner.java:29)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\n\tat org.testng.TestRunner.run(TestRunner.java:624)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1255318501,
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
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@ResearchPage"
    }
  ]
});
formatter.before({
  "duration": 1497397540,
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
  "duration": 4638001245,
  "status": "passed"
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
  "duration": 24170448,
  "status": "passed"
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
  "duration": 1568086616,
  "status": "passed"
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
  "duration": 10038833806,
  "status": "passed"
});
formatter.after({
  "duration": 141953110,
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
  "duration": 1632721801,
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
  "duration": 4720626140,
  "status": "passed"
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
  "duration": 22899658,
  "status": "passed"
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
  "duration": 926958410,
  "status": "passed"
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
  "duration": 10043465582,
  "status": "passed"
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
  "duration": 53264022,
  "status": "passed"
});
formatter.after({
  "duration": 121455796,
  "status": "passed"
});
});