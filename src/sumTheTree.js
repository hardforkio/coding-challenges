// Taken from https://www.codewars.com/kata/sum-the-tree/javascript
/**
 * Generates an iterator to a walk binary tree in pre-order
 */
function* preorderWalk(root) {
    if (root.left)
        yield* preorderWalk(root.left);
    yield root;
    if (root.right)
        yield* preorderWalk(root.right);
}

/**
 * Sum up values in a binary tree
 */
function sumTheTreeValues(root) {
    //generate iterator
    //sum up values (reduce with +)
    var sum = 0;
    for (node of preorderWalk(root))    //Is there a way to use map() and reduce()?
        sum += node.value;
    return sum;
}

module.exports = { sumTheTreeValues };
