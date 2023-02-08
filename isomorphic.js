function isSubsequence(s, t) {
  let sp = 0;
  let tp = 0;

  while (sp < s.length && tp < t.length) {
    if (s[sp] === t[tp]) {
      sp++;
      tp++;
    } else {
      tp++;
    }
  }
  return sp === s.length;
}
