const bfs = (root) => {
  if (rooot === null) return root;

  const queue = [];
  queue.push(this.root);

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
