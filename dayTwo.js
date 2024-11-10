function longestWord(sentence) {
    // write your code below
    let words = sentence.split(" ");
    let longWord = "";

    for (let i = 0; i < words.length; i++){
        if (words[i].length > longWord.length){
            longWord = words[i];
        }
    }
    return longWord;    
}
const testOne = longestWord("The quick brown fox jumps over the lazy dog");
//* expected output: quick
const testTwo = longestWord("This is the sentence");
//* expected output: sentence
const testThree = longestWord("You are right!");
//* expected output: right
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
