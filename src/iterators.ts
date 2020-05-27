import * as R from 'ramda'

export interface Iterator {
  (list: RecursiveNumberList): ReadonlyArray<number>
}

export type RecursiveNumberList = ReadonlyArray<number | RecursiveNumberList>

export const reduceDFS = (
  acc: ReadonlyArray<number>,
  currentElement: number | RecursiveNumberList,
): ReadonlyArray<number> => {
  if (typeof currentElement === 'number') {
    return R.append(currentElement, acc)
  } else {
    return R.concat(acc, R.reduce(reduceDFS, [], currentElement))
  }
}

type BFSAccumulator = {
  result: ReadonlyArray<number>
  todo: RecursiveNumberList
}

export const BFSreducer = (acc: BFSAccumulator): BFSAccumulator => {
  const currentElement = R.head(acc.todo)
  if (!currentElement) {
    throw new Error('No elements in todo!')
  }
  if (typeof currentElement === 'number') {
    return R.evolve<any>({
      result: R.append(currentElement),
      todo: R.drop(1),
    })(acc)
  } else {
    return R.evolve<any>({
      result: R.identity,
      todo: R.pipe<
        RecursiveNumberList,
        RecursiveNumberList,
        RecursiveNumberList
      >(
        R.drop(1),
        R.concat(R.__, currentElement),
      ),
    })(acc)
  }
}

const BFSfinished = (acc: BFSAccumulator): boolean => !acc.todo.length

export const flattenBFS = (list: RecursiveNumberList): ReadonlyArray<number> =>
  R.prop('result')(R.until(BFSfinished, BFSreducer, { result: [], todo: list }))

export const flattenDFS = R.reduce(reduceDFS, [])
