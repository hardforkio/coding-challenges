// https://www.codewars.com/kata/mumbling/javascript

import { reduce } from 'ramda'

export const createSummand: (letter: string, length: number) => string = (
  letter,
  length,
) =>
  `${letter.toUpperCase()}${Array(length)
    .fill(letter.toLowerCase())
    .join('')}`

export const addSummand: (summands: string[], letter: string) => string[] = (
  summands,
  letter,
) => {
  summands.push(createSummand(letter, summands.length))
  return summands
}

export function accum(input: string): string {
  return reduce(addSummand, [], input.split('')).join('-')
}
