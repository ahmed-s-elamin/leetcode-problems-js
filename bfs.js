const bfs = (root) => {
  if (rooot === null) return root;

  const queue = [];
  while (queue.length) {
    const curr = queue.shift();
    console.log(curr);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(right.right);
    }
  }
};
