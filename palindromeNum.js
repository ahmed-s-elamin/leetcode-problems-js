/**
 * @param {number} x
 * @return {boolean}
 */

/* 
 if negative return false
 reversed variable = 0
 current variable = x
 while for current !== 0
  */

var isPalindrome = function (x) {
  if (x < 0) return false;

  let reversed = 0;

  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    reversed = reversed * 10 + (i % 10);
  }
  return reversed === x;
};

//string method
// var isPalindrome = function(x) {
//     let reversed = x.toString().split('').reverse().join('')
//    return (x.toString() === reversed)
//  };
