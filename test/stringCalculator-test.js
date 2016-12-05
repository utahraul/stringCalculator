//test/stringCalculator-test.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var stringCalculator = require('./../src/stringCalculator.js');

describe('stringCalculator', function() {
  it('stringCalculator() should return 0 if an empty string is passed in', function() {
    var emptyStringCalculator = stringCalculator("");
    expect(emptyStringCalculator).to.equal(0);
  });
  
    it('stringCalculator() should return the same number if an only one number string is passed in', function() {
    var emptyStringCalculator = stringCalculator("1");
    expect(emptyStringCalculator).to.equal(1);
  });

});
