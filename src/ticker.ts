export interface Ticker {
  start: () => void
  reset: () => void
  tick: () => void
}

type OnTick = (timeLeft: number) => void

export const createTicker: (timeLeft: number) => {}
