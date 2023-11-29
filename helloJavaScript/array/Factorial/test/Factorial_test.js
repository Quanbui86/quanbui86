var assert = require("assert");
var Calculate =  require('../Factorial.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it ('take an integer and you multiply that by all the integers that are less than it', () => {
      //Setup
      const num = 5;
      const expected = 120;
      //Exercise
      const actual = Calculate.factorial(num)
      //Verify
      assert.strictEqual(actual, expected)
    })
    it ('check if input is a number', () => {
      //Setup
      const num = 'a';
      const expected = TypeError;
      //Exercise
      const throwsFunction = () =>{ Calculate.factorial(num) } 
      //Verify    
      assert.throws(
        throwsFunction,
        expected
      )
    })
    it ('special key when factorial num = 0', () => {
      //Setup
      const num = 0;
      const expected = 1;
      //Exercise
      const actual = Calculate.factorial(num)
      //Verify
      assert.strictEqual(actual, expected)
    })
  });
});