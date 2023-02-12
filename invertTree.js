function invertTree(root) {
  if (root === null) return root;

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.fight = left;

  return root;
}
