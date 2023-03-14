// write a recursive function that given an input n
// sums all nonnegative integers up to n

function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}

//test

//sum 0 -> 0
//sum 1 -> 1
//sum 4 -> 1+2+3+4 = 10

console.log(sum(4));
