import R from "ramda"

declare module "ramda" {
  interface Static {
    ifElse(fn: R.Pred, onTrue: R.Arity2Fn, onFalse: R.Arity2Fn): R.Arity2Fn
  }
}
