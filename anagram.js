/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var validAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  return sort(s) === sort(t);
};

function sort(str) {
  return str.split("").sort().join("");
}

console.log(validAnagram("car", "rac"));
console.log(validAnagram("aahmeed", "deehaam"));
console.log(validAnagram("aacc", "ccac"));
