function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word).toLowerCase();
  return word.toLowerCase() === reversedWord;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  string input
  if string input is equal to reversed string input
    return true
  return false
*/

/*
  Add written explanation of your solution here
  isPalindrome() should take a str input and return true if it can be read the same even if reversed 
  and return false if it can not be read the same when reversed
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("alex"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("refer"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("key"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("wq"));
}

module.exports = isPalindrome;
