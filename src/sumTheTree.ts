// Taken from https://www.codewars.com/kata/sum-the-tree/javascript

import R from 'ramda'

export type Node = {
  value: number
  left: Node | null
  right: Node | null
}

type Queue = ReadonlyArray<Node>

export type Accumulator = {
  result: ReadonlyArray<number>
  queue: Queue
}

export const getChildrenAsArray: (node: Node) => Queue = R.pipe<
  Node,
  ReadonlyArray<Node | null>,
  ReadonlyArray<Node>
>(
  R.juxt<Node, Node | null>([R.prop('left'), R.prop('right')]),
  R.reject<any>(R.equals(null)),
)

const getFirstValueOfQueue: (accumulator: Accumulator) => number = R.pipe<
  Accumulator,
  Queue,
  Node,
  number
>(
  R.prop('queue'),
  R.head,
  R.prop('value'),
)

export const dropFirstElementFromQueue: (
  accumulator: Accumulator,
) => Queue = R.pipe(
  R.prop('queue'),
  R.drop(1),
)

export const getChildrenOfFirstElementAsQueue: (
  accumulator: Accumulator,
) => Queue = R.pipe(
  R.prop('queue'),
  R.take(1),
  R.apply(getChildrenAsArray),
)

export const dropFirstNodeFromQueAndAddItsChildrenToQueue: (
  accumulator: Accumulator,
) => Queue = R.converge(R.concat, [
  dropFirstElementFromQueue,
  getChildrenOfFirstElementAsQueue,
])

export const appenValueOfFirstNodeInQueToResultArray: (
  accumulator: Accumulator,
) => ReadonlyArray<number> = R.converge(R.append, [
  getFirstValueOfQueue,
  R.prop('result'),
])

export const addValueOfNodeToResultAndQueueChildren: (
  accumulator: Accumulator,
) => Accumulator = R.applySpec({
  result: appenValueOfFirstNodeInQueToResultArray,
  queue: dropFirstNodeFromQueAndAddItsChildrenToQueue,
})

const queIsEmpty: (accumulator: Accumulator) => boolean = R.pipe(
  R.prop('queue'),
  R.prop('length'),
  R.equals(0),
)

export const treeToArrayWithAccumulators: (
  accumulator: Accumulator,
) => Accumulator = R.until(queIsEmpty, addValueOfNodeToResultAndQueueChildren)

export const wrapNodeInAccumulator: (node: Node) => Accumulator = R.applySpec({
  result: () => [],
  queue: (x: Node): Queue => [x],
})

export const treeToArray: (root: Node) => ReadonlyArray<number> = R.pipe(
  wrapNodeInAccumulator,
  treeToArrayWithAccumulators,
  R.prop('result'),
)

export const sumTheTreeValues: (root: Node) => number = R.pipe(
  treeToArray,
  R.sum,
)
