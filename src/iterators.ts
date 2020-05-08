class IteratorBase<T> {
  $value: T[]
  flat: T[]
  index: number
  constructor(xs: T[]) {
    this.$value = xs
    this.flat = this.flatten(xs)
    this.index = 0
  }

  next(): { value: T; done: boolean } {
    if (this.hasNext()) {
      this.index += 1
      return { value: this.flat[this.index - 1], done: false }
    }
    this.index = 0
    return { value: this.flat[0], done: true }
  }

  hasNext(): boolean {
    return !(this.index >= this.flat.length)
  }

  flatten(xs: T[]): T[] {
    return xs
  }

  zip<T, U>(ys: Iterator<U>): [T, U][] {
    const zs: [T, U][] = []
    while (true) {
      const x = this.next()
      const y = ys.next()
      if (x.done || y.done) {
        break
      }
      zs.push([x.value, y.value])
    }
    return zs
  }
}

export class IteratorDepthFirst<T> extends IteratorBase<T> {
  static of<U>(xs: U[]): IteratorDepthFirst<U> {
    return new IteratorDepthFirst(xs)
  }

  flatten(xs: T[] | [T[]], _flat: T[] = []): T[] {
    for (let i = 0; i < xs.length; i += 1) {
      if (Array.isArray(xs[i])) {
        this.flatten(xs[i], _flat)
      } else {
        _flat.push(xs[i])
      }
    }
    return _flat
  }
}

export class IteratorBreadthFirst<T> extends IteratorBase<T> {
  static of<U>(xs: U[]): IteratorBreadthFirst<U> {
    return new IteratorBreadthFirst(xs)
  }

  flatten(xs: T[] | [T[]], _flat: T[] = []): T[] {
    let que: T[] = []
    for (let i = 0; i < xs.length; i += 1) {
      if (Array.isArray(xs[i])) {
        que = que.concat(xs[i])
      } else {
        _flat.push(xs[i])
      }
    }
    if (que.length > 0) {
      this.flatten(que, _flat)
    }
    return _flat
  }
}

export function zip<T, U>(
  x: IteratorBreadthFirst<T> | IteratorDepthFirst<T>,
  y: IteratorBreadthFirst<U> | IteratorDepthFirst<U>
): [T, U][] {
  return x.zip(y)
}
