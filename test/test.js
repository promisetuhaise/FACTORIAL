// BY TUHAISE PROMISE AND NAMUKISA FLORENCE


// test/fibonacci.test.js
const { expect } = require('chai');

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

describe('Fibonacci Function', () => {
  it('should calculate the 10th Fibonacci number', () => {
    expect(fibonacci(10)).to.equal(55);
  });
});





//iteractive
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    let prev1 = 0, prev2 = 1, current;
  
    for (let i = 2; i <= n; i++) {
      current = prev1 + prev2;
      prev1 = prev2;
      prev2 = current;
    }


  
    return current;
  }
  
  module.exports = fibonacci;
  

  //recursive Approach

  function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    return fibonacci(n - 1) + fibonacci(n - 2); 
  }
  
  module.exports = fibonacci;
  



  //facorial
  // test/factorial.test.js
const assert = require('chai').assert; 
const factorial = require('../factorial'); 

describe('Factorial Function', () => {
  
  it('should return 1 for 0! (0 factorial)', () => {
    assert.equal(factorial(0), 1);
  });

  it('should return 1 for 1! (1 factorial)', () => {
    assert.equal(factorial(1), 1);
  });

  it('should return 120 for 5! (5 factorial)', () => {
    assert.equal(factorial(5), 120);
  });

  it('should return 720 for 6! (6 factorial)', () => {
    assert.equal(factorial(6), 720);
  });

  it('should return undefined for negative numbers', () => {
    assert.isUndefined(factorial(-5));
  });

});

  