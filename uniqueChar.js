function firstUniqueChar(s) {
  let map = new Map();

  //traversing string
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (map.has(curr)) {
      map.set(curr, map.get(curr + 1));
    } else {
      map.set(curr, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (map.get(curr) === 1) return i;
  }

  return -1;
}
