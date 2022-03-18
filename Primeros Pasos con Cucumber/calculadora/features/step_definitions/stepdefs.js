const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
    // We'll leave the implementation blank for now
    if (today === "Friday") {
       return "TGIF";
    } else {
      return "Nope";
    }
}

function isItMonday(tomorrow) {
   // We'll leave the implementation blank for now
   if (tomorrow === "Monday") {
      return "Shit!";
   } else {
     return "YEY";
   }
}

//This part helps to respond to Is it Friday tomorrow?

Given('today is {string}', function (givenDay) {
    this.today = givenDay;
});
  
When('I ask whether it\'s Friday yet', function () {
   this.actualAnswer = isItFriday(this.today);
});
  
Then('I should be told {string}', function (expectedAnswer) {
   assert.strictEqual(this.actualAnswer, expectedAnswer);
});

//This part helps to respond to Is it Monday tomorrow?

Given('tomorrow is {string}', function (givenDay) {
    this.tomorrow = givenDay;
});
  
When('I ask whether it\'s Friday tomorrow', function () {
   this.actualAnswer2 = isItMonday(this.tomorrow);
});
  
Then('I should say {string}', function (expectedAnswer) {
   assert.strictEqual(this.actualAnswer2, expectedAnswer);
});