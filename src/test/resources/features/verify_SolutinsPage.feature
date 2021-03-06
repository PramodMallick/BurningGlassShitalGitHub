@Regression
@SolutionsPage
Feature: Verify Solutions page functionality
  As an employee of the company
  I want to login my employee profile using my credentials
  In order to collaborate with my colleagues

  Background: User navigates to Company home page
    Given I am on the "Company home" page on URL "https://www.burning-glass.com/uk"
    Then I should see "Burning Glass Technologies United Kingdom" message

  Scenario: Navigate to Solutions page
    When I navigate to "Solutions" page from top menu bar
    Then I should see "Solutions" message
    And below sections would be listed in "Solutions" page
      | Corporations            |
      | Education                |
      | Government and Workforce |
      | Recruiting and Staffing  |
      | Strategic Partnerships  |
