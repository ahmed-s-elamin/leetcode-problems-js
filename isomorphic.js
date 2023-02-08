function isIsomorsphic(s, t) {
  if (s.length !== t.length) return false;

  //creating two objs
  let sMap = {};
  let tMap = {};
  let cur = 0;

  while (cur < s.length) {
    if (sMap[s[cur]] !== tMap[t[cur]]) {
      return false;
    }
    sMap[s[cur]] = cur + 1;
    tMap[t[cur]] = cur + 1;
    cur++;
  }

  return true;
}

console.log(isIsomorsphic("egg", "add"));
console.log(isIsomorsphic("elf", "foo"));
