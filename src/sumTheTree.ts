// Taken from https://www.codewars.com/kata/sum-the-tree/javascript

import R from 'ramda'

export type Node = {
  value: number
  left: Node | null
  right: Node | null
}

type NodeList = ReadonlyArray<Node>

export type Accumulator = { value: number; unvisitedNodes: NodeList }

export const getChildren: (node: Node) => NodeList = R.pipe<
  Node,
  ReadonlyArray<Node | null>,
  ReadonlyArray<Node>
>(
  R.juxt<Node, Node | null>([R.prop('left'), R.prop('right')]),
  R.reject<any>(R.equals(null)),
)

export const treeReducer = (
  acc: ReadonlyArray<number>,
  currentElement: Node | null,
): ReadonlyArray<number> => {
  if (currentElement) {
    return R.concat(
      R.append(R.prop('value')(currentElement), acc),
      R.reduce(treeReducer, [], getChildren(currentElement)),
    )
  }
  return acc
}

export const mapTreeToArray: (root: Node) => ReadonlyArray<number> = R.pipe(
  (x: Node): NodeList => [x],
  R.reduce(treeReducer, []),
)

export const sumTheTreeValues: (root: Node) => number = R.pipe(
  mapTreeToArray,
  R.sum,
)
