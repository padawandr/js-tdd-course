const sum = (numA, numB) => (numA + numB)
const sub = (numA, numB) => (numA - numB)
const mult = (numA, numB) => (numA * numB)
const div = (numA, numB) => (
  (numB === 0) ? 'Cannot divide by zero' : (numA / numB)
)

export { sum, sub, mult, div }
