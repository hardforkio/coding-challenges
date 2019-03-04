type callbackType = (
  error: Error | null,
  data?: string,
) => string | Error | void

export type callbackStyleFunctionType = (
  value: number,
  callback: callbackType,
) => string | Error | void

export const promisify: (
  callbackStyleFunction: callbackStyleFunctionType,
) => (value: any) => Promise<string | Error> = (callbackStyleFunction) => (value) =>
  new Promise((resolve, reject) => {
    callbackStyleFunction(value, (error, data) => {
      if (error) {
        reject(error)
        return
      }
      resolve(data)
    })
  })
