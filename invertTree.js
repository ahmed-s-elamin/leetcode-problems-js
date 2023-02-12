function invertTree(root) {
  if (root === null) return root;
  return dfs(root);
}

function dfs(root) {
  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.fight = left;

  return root;
}
