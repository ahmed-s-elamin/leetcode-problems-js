/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let res = 0;
  s.split("").forEach((nums, i) => {
    //if roman < next character of roman
    if (map[nums] < map[s[i + 1]]) {
      res -= map[nums];
    } else {
      res += map[nums];
    }
  });
  return res;
};
