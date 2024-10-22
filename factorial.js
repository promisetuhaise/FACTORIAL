// BY TUHAISE PROMISE AND NAMUKISA FLORENCE


// factorial.js

function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // Base case: factorial(0) = factorial(1) = 1
    return n * factorial(n - 1); // Recursive case
  }
  
  module.exports = factorial; // Export the factorial function
  