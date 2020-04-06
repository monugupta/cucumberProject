$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Search cars page is working fine.",
  "description": "In order to validate that\r\nthe search cars page is working fine\r\nwe will do the acceptance testing",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working-fine.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 6354180969,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate search cars page",
  "description": "",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working-fine.;validate-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Home Page \"https://www.carsguide.com.au\" of CarsGuide website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 11
    },
    {
      "cells": [
        "Cars for Sale"
      ],
      "line": 12
    },
    {
      "cells": [
        "Sell My Car"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select carbrand as \"BMW\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select carmodel as \"1 SERIES\" from SelectModel dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select location as \"Australia\" from SelectLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select price as \"$1,000\" from price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "the page title should be \"Bmw 1 Series Cars Under 1000 for sale | CarsGuide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_CarsGuide_website(String)"
});
formatter.result({
  "duration": 50278631988,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-FNF69NB\u0027, ip: \u0027192.168.43.143\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506120 (e3e53437346286..., userDataDir: C:\\Users\\Selenium\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 63.0.3239.132, webStorageEnabled: true}\nSession ID: 3d0eaf4998122f6b983936bddbdd5b65\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:325)\r\n\tat utils.SeleniumDriver.openPage(SeleniumDriver.java:35)\r\n\tat steps.SearchCarsSteps.i_am_on_the_Home_Page_of_CarsGuide_website(SearchCarsSteps.java:24)\r\n\tat ✽.Given I am on the Home Page \"https://www.carsguide.com.au\" of CarsGuide website(SearchCars.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCarsSteps.click_on_link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carbrand_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1 SERIES",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carmodel_as_from_SelectModel_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_location_as_from_SelectLocation_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,000",
      "offset": 17
    }
  ],
  "location": "SearchCarsSteps.select_price_as_from_price_dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchCarsSteps.click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Cars Under 1000 for sale | CarsGuide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3421215820,
  "status": "passed"
});
formatter.uri("UsedCarSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Used Search cars page is working fine.",
  "description": "In order to validate that\r\nthe Used search cars page is working fine\r\nwe will do the acceptance testing",
  "id": "acceptance-testing-to-validate-used-search-cars-page-is-working-fine.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 3077470687,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate used search cars page",
  "description": "",
  "id": "acceptance-testing-to-validate-used-search-cars-page-is-working-fine.;validate-used-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Used-Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Home Page \"https://www.carsguide.com.au\" of CarsGuide website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 11
    },
    {
      "cells": [
        "Cars for Sale"
      ],
      "line": 12
    },
    {
      "cells": [
        "Sell My Car"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on \"Used Search Cars\" link on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select carbrand as \"AUDI\" from AnyMake dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select car model on Used Search Car page",
  "rows": [
    {
      "cells": [
        "carModel"
      ],
      "line": 17
    },
    {
      "cells": [
        "A4"
      ],
      "line": 18
    },
    {
      "cells": [
        "A3"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select location as \"SA - All\" from SelectLocation dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select price as \"$2,000\" from price dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on Find_My_Next_Car button on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see list of searched cars on Used Search Car page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the page title should be \"Used Audi A4 Cars Under 2000 for Sale SA | CarsGuide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_CarsGuide_website(String)"
});
formatter.result({
  "duration": 28300026325,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 41937104666,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Cars For Sale\"}\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-FNF69NB\u0027, ip: \u0027192.168.43.143\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506120 (e3e53437346286..., userDataDir: C:\\Users\\Selenium\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 63.0.3239.132, webStorageEnabled: true}\nSession ID: 04fc22c82267976eab123a07bc204980\n*** Element info: {Using\u003dlink text, value\u003dCars For Sale}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:425)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getCoordinates(Unknown Source)\r\n\tat org.openqa.selenium.interactions.internal.MouseAction.getActionLocation(MouseAction.java:65)\r\n\tat org.openqa.selenium.interactions.MoveMouseAction.perform(MoveMouseAction.java:43)\r\n\tat org.openqa.selenium.interactions.CompositeAction.perform(CompositeAction.java:36)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:641)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:594)\r\n\tat pages.actions.CarsGuideHomePageActions.moveToCarsForSaleMenu(CarsGuideHomePageActions.java:23)\r\n\tat steps.SearchCarsSteps.i_move_to_the_menu(SearchCarsSteps.java:33)\r\n\tat ✽.When I move to the menu(UsedCarSearch.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Search Cars",
      "offset": 10
    }
  ],
  "location": "UsedCarsSteps.click_on_link_on_Used_Search_Car_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AUDI",
      "offset": 20
    }
  ],
  "location": "UsedCarsSteps.select_carbrand_as_from_AnyMake_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsedCarsSteps.select_car_model_on_Used_Search_Car_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - All",
      "offset": 20
    }
  ],
  "location": "UsedCarsSteps.select_location_as_from_SelectLocation_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,000",
      "offset": 17
    }
  ],
  "location": "UsedCarsSteps.select_price_as_from_price_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsedCarsSteps.click_on_Find_My_Next_Car_button_on_Used_Search_Car_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsedCarsSteps.i_should_see_list_of_searched_cars_on_Used_Search_Car_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A4 Cars Under 2000 for Sale SA | CarsGuide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1012711248,
  "status": "passed"
});
});