// const assertEqual = function(actual, expected) {
//   console.log(actual, expected);
//   if (actual === expected) {
//     console.log`✅✅✅ Assertion Passed: ${actual === expected}`;
//   } else if (actual !== expected) {
//     console.log`🛑🛑🛑 Assertion Failed: ${actual !== expected}`;
//   }
// };


// const assertArraysEqual = function(arr1, arr2) {
//   // console.log(arr1, arr2);
//   let assert = true;
//   if (arr1.length !== arr2.length) assert = false;
//   for(let i = 0; i < arr1; i++)
//   if(arr1[i] !== arr2[i]) assert = false;
//   assert
//     ? console.log(`✅✅✅ Assertion Passed: These are equal.`)
//     : console.log(`🛑🛑🛑 Assertion Failed: These are not equal.`);

// };

const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    if(sentence[i] !== ' '){
      if(! results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]];
      }
      }
    }
  return results;
};
module.exports = letterPositions;

// console.log(letterPositions("hello"));
// const result1 = letterPositions("hello");
// // console.log(result1["h"]);
// assertArraysEqual(result1["h"], [0]);
// assertArraysEqual(result1["o"], [4]);