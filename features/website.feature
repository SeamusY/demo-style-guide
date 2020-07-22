Feature: Testing website

Scenario Outline: Visting webpage
    When I open homepage
    Then I should see a styleguide with "<attribute>"

Examples:
| attribute |
| Button    |
| CheckBox  |
| InputField|
| RadioButton|