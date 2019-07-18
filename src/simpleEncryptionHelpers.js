const range = (n) => [...Array(n).keys()]

const repeated = (f) => (x, n) => range(Math.max(n, 0)).reduce(f, x)

module.exports = {
  repeated,
  range,
}
