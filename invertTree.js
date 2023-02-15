function invertTree(root) {
  if (root === null) return root;

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.fight = left;

  return root;
}

//bfs solution
var invertTree = function (root) {
  if (root === null) return root;
  bfs([root]);
  return root;
};

const bfs = (queue) => {
  while (queue.length) {
    for (let i = queue.length - 1; 0 <= i; i--) {
      const node = queue.shift();
      const left = node.right;
      const right = node.left;

      node.left = left;
      node.right = right;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
};
