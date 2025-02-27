/*
Jumbo Juice makes a fresh juice out of fruits of your choice.
Jumbo Juice charges $5 for regular fruits and $7 for special ones. 
Regular fruits are Banana, Orange, Apple, Lemon and Grapes. 
Special ones are Avocado, Strawberry and Mango. 

Others fruits that are not listed are also available upon request. 
Those extra special fruits cost $9 per each. 
There is no limit on how many fruits she/he picks.
The price of a cup of juice is the mean of price of chosen fruits. 

In case of decimal number (ex. $5.99), output should be the nearest integer 
(use the standard rounding function of your language of choice).

Input:
  The function will receive an array of strings, each with the name of a fruit. 
  The recognition of names should be case insensitive. 
  There is no case of an empty array input.

Example:
  ['Mango', 'Banana', 'Avocado'] 
  The price of this juice bottle is (7+5+7)/3 = $6($6.333333...).
*/


// Solution

function mixFruit (arr) {
  let prices = {banana:5, orange:5, apple:5, lemon:5, grapes:5, avocado:7, strawberry:7, mango:7};
  return Math.round(arr.reduce((a,b)=> a += prices[b.toLowerCase()] || 9,0)/arr.length);
}

// or

function mixFruit(arr) {
  reg = ["banana", "orange", "apple", "lemon", "grapes"];
  spec = ["avocado","strawberry", "mango"];
  total = 0;
  for (let i = 0; i < arr.length; i ++) {
    if (reg.includes(arr[i].toLowerCase())) {
      total += 5;
    } else if (spec.includes(arr[i].toLowerCase())) {
        total += 7;
    } else {
        total += 9;
    }
  }
  return Math.round(total/arr.length);
}