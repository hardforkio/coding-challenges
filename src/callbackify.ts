export type promiseGeneratingFunctionType = (value: number) => Promise<string>

export type callbackType = (
  error: Error | null,
  result?: string,
) => Error | string | void

export type callbackStyleFunction = (
  value: number,
  callback: callbackType,
) => void

export const callbackify: (
  promiseGeneratingFunction: promiseGeneratingFunctionType,
) => callbackStyleFunction = (promiseGeneratingFunction) => (value, callback) => {
  promiseGeneratingFunction(value).then(
    (result) => callback(null, result),
    (error) => callback(error),
  )
  return void 0
}
