let arr = [];
module.exports = function recursion(tree) {
if (tree && tree.value) {
  arr.push(tree.value);
  recursion(tree.left);
  recursion(tree.right);
 } 
return arr;
}