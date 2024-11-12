function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

const testOne = factorial(5); //* expected output: 120
const testTwo = factorial(3); //* expected output: 6
const testThree = factorial(10); //* expected output: 3628800

console.log(
  "Test One: ",
  testOne,
  "\n",
  "Test Two: ",
  testTwo,
  "\n",
  "Test Three: ",
  testThree
);