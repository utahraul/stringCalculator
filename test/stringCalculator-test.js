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
    var oneNumberStringCalculator = stringCalculator("1");
    expect(oneNumberStringCalculator).to.equal(1);
  });

  it('stringCalculator() should return the adddition of two numbers if a two numbers string is passed in', function() {
    var oneNumberStringCalculator = stringCalculator("1,2");
    expect(oneNumberStringCalculator).to.equal(3);
  });

  it('stringCalculator() should return the adddition of n numbers if a n numbers string is passed in', function() {
    var oneNumberStringCalculator = stringCalculator("1,2,3,4,5");
    expect(oneNumberStringCalculator).to.equal(15);
  });

  it('stringCalculator() should return the adddition of n numbers if a n numbers string is passed in separate by commas or lines', function() {
    var oneNumberStringCalculator = stringCalculator("1\n2,3");
    expect(oneNumberStringCalculator).to.equal(6);
  });

});
