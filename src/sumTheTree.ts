// Taken from https://www.codewars.com/kata/sum-the-tree/javascript

export interface Node {
    value: number
    left: Node | null
    right: Node | null
}

export const sumTheTreeValues = (root: Node | null): number => {
    if (root === null) {
        return 0
    }
    return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
}
