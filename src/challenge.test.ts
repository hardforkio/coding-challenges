import { deepEqual } from "./challenge";

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
const array3 = [5, 4, 3, 2, 1];

test("two arrays with the same content", () => {
  expect(deepEqual(array1, array2)).toEqual(true);
});

test("two arrays with different content", () => {
  expect(deepEqual(array1, array3)).toEqual(false);
});
