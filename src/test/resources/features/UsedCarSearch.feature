@Used-Search-Cars
Feature: Acceptance testing to validate Used Search cars page is working fine.
  In order to validate that
  the Used search cars page is working fine
  we will do the acceptance testing

  @Used-Search-Cars-Positive
  Scenario: Validate used search cars page
    Given I am on the Home Page "https://www.carsguide.com.au" of CarsGuide website
    When I move to the menu
      | Menu          |
      | Cars for Sale |
      | Sell My Car   |
    And click on "Used Search Cars" link on Used Search Car page
    And select carbrand as "AUDI" from AnyMake dropdown on Used Search Car page
    And select car model on Used Search Car page
      | carModel |
      | A4       |
      | A3       |
    And select location as "SA - All" from SelectLocation dropdown on Used Search Car page
    And select price as "$2,000" from price dropdown on Used Search Car page
    And click on Find_My_Next_Car button on Used Search Car page
    Then I should see list of searched cars on Used Search Car page
    And the page title should be "Used Audi A4 Cars Under 2000 for Sale SA | CarsGuide"
