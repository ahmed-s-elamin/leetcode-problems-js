/**
 * @param {string} s
 * @return {boolean}
 using 2 pointers l for the first character and r for the last character
 */
function isPalindrome(s) {
  s = s.replace(/[^a-z0-9]/gi, "");
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    l++;
    r--;
  }
  return true;
}
