// Import the cucumber operators we need
import { Before, Given, Then, When } from "cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";

let page: AppPage;

Before(() => {
  
});

Given("I am a new customer", async () => {
 
});

When("I click on Get Premium", async () => {
  
  
});

Then("The premium should show {string}", async (x: string) => {
  // Expect that we get the correct value showing
 
  expect(x);
});