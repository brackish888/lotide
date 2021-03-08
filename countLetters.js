// const assertEqual = function(actual, expected) {
//   console.log(actual, expected);
//   if (actual === expected) {
//     console.log`✅✅✅ Assertion Passed: ${actual === expected}`;
//   } else if (actual !== expected) {
//     console.log`🛑🛑🛑 Assertion Failed: ${actual !== expected}`;
//   }
// };
const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  let result = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;

};
module.exports = countLetters;
// console.log(countLetters("Letters from home"));
// const result1 = countLetters("Letters from home");
// assertEqual(result1["e"], 3);
// assertEqual(result1["m"], 2);