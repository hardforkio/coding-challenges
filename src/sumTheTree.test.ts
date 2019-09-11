import test from "tape"
import { Node, sumTheTreeValues } from "./sumTheTree"

function createLeftDeepNode(depth: number): Node {
    const newNode = (): Node => {
        return { left: null, right: null, value: 1 }
    }
    const root: Node = newNode()

    let currentNode: Node = root
    for (let i: number = 1; i < depth; i++) {
        currentNode.left = newNode()
        currentNode = currentNode.left
    }
    return root
}

const simpleNode: Node = {
    left: { left: null, right: null, value: 1 },
    right: { left: null, right: null, value: 2 },
    value: 10,
}
const unbalancedNode: Node = {
    left: { left: null, right: null, value: 0 },
    right: {
        left: null,
        right: { left: null, right: null, value: 1 },
        value: 0,
    },
    value: 11,
}
const deepNode: Node = createLeftDeepNode(1000)
const veryDeepNode: Node = createLeftDeepNode(100000)

test("Simple Test", (t) => {
    t.test("Sums up all children", (assert) => {
        assert.plan(1)
        assert.equal(sumTheTreeValues(simpleNode), 13)
    })

    t.test("Handles unbalanced trees", (assert) => {
        assert.plan(1)
        assert.equal(sumTheTreeValues(unbalancedNode), 12)
    })

    t.test("Sums deep nodes", (assert) => {
        assert.plan(1)
        assert.equal(sumTheTreeValues(deepNode), 1000)
    })

    t.test("Sums very deep nodes", (assert) => {
        assert.plan(1)
        assert.equal(sumTheTreeValues(veryDeepNode), 100000)
    })
})
