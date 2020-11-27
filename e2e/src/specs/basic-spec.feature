Feature: Increment the counter
    This feature lets a user increment the counter by clicking on the button.

Scenario: Premium Validation
    Given I am a new customer
    When I click on Get Premium
    Then The premium should show "350"