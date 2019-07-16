// Taken from https://www.codewars.com/kata/sum-the-tree/javascript
/**
 * Sums up values in binary tree
 * * Assumptions:
 *  - null is not a valid tree
 *  - the function will only receive valid trees as input
 * @param {*} root 
 */
function sumTheTreeValues(root) {
    return (root.left ? sumTheTreeValues(root.left) : 0)
        + root.value
        + (root.right ? sumTheTreeValues(root.right) : 0);
}

module.exports = { sumTheTreeValues };
