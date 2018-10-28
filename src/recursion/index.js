module.exports = function recursion(tree) {
  const arrTree = [];

  function internal(node, depth) {
    if (node && node.value) {
      if (arrTree[depth]) arrTree[depth].push(node.value);
      else arrTree[depth] = [node.value];
      internal(node.left, depth + 1);
      internal(node.right, depth + 1);
    }
  }
  internal(tree, 0);
  return arrTree;
}