// Taken from https://www.codewars.com/kata/sum-the-tree/javascript
function sumTheTreeValues(root) {
  if (root === null) {
    return 0
  }
  return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
}

module.exports = { sumTheTreeValues }
