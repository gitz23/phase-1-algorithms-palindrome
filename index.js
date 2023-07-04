function isPalindrome(word) {
  // Write your algorithm here
  const initialWord = word.toLowerCase();
  const reverseWord = initialWord.split('').reverse().join('');
  return initialWord === reverseWord;

}

/* 
  Add your pseudocode here
  take in a word
  change the word to lowercase 
  split the word into an array and reverse the order of the letters and joins them back  
  check if the reversedWord is === to the initial word  
  return the word 
  if the letters match it is true 
*/

/*
  Add written explanation of your solution here
  the word is initially changed to lowercase to eliminate the issue of capital letters.
  the word is then split into an array to enable it to be easily reversed and the the split array is joined back into a string to enable easy 
  comparison of the initialWord with the reversedWord
  it returns true if the words are similar
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
