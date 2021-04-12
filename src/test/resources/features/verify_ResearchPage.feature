@Sanity
@ResearchPage
Feature: Verify Reserch page functionality
  As an employee of the company
  I want to login my employee profile using my credentials
  In order to collaborate with my colleagues

  Background: User navigates to Company home page
    Given I am on the "Company home" page on URL "https://www.burning-glass.com/uk"
    Then I should see "Burning Glass Technologies United Kingdom" message

  Scenario: Verify Navigate to About page
    When I navigate to "Research" page from top menu bar
    Then I should see "Insights based on real-time job data" message
