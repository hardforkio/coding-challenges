// Taken from https://www.codewars.com/kata/sum-the-tree/javascript

export interface Node {
    value: number
    left: Node | null
    right: Node | null
}

export const sumTheTreeValues = (root: Node): number => {
    const stack: Node[] = [root]

    let sum: number = 0
    let currentNode: Node | undefined

    while (stack.length > 0) {
        currentNode = stack.pop()
        if (currentNode) {
            if (currentNode.left !== null) {
                stack.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                stack.push(currentNode.right)
            }
            sum += currentNode.value
        }
    }
    return sum
}
