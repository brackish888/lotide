// const assertEqual = function (actual, expected) {
//   console.log(actual, expected);
//   if (actual === expected) {
//     console.log`✅✅✅ Assertion Passed: ${actual === expected}`;
//   } else if (actual !== expected) {
//     console.log`🛑🛑🛑 Assertion Failed: ${actual !== expected}`;
//   }
// };
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (const name of allItems) {
    if (itemsToCount[name]) {
      if (result[name] === undefined)
        result[name] = 1
      else {
        result[name] += 1
      }
    }
  }
  return result

};

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// console.log(result1)
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

// //{"Jason": 1}
//{"Fang": 2}
//{"Jason": 1, "Fang": 2}