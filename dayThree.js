function factorial(n) {
  let i = n;
  let num = 1;
  while(i > 0){
    num = num * i;
    i--;
  }
  return num;
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