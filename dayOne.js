function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
const testOne = reverseString("egnahc eht eB");
const testTwo = reverseString("Hello");
const testThree = reverseString("level");
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
