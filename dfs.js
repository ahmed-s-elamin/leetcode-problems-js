//iterative solution for dfs

function dfs(root) {
  if (root === null) return [];

  const res = [];
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    res.push(curr);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return res;
}
