const without = function(original, itemsToRemove) { //
  let result = [];
  for (let i = 0; i < original.length; i++) {
    let foundMatch = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (original[i] === itemsToRemove[j]) {
        foundMatch = true;
      }
    }
    if (!foundMatch) {
      result.push(original[i]);
    }
  }
  return result;
};
module.exports = without;

// const assertArraysEqual = function(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = i; j <= i; j++) {
//       if (arr1[i] !== arr2[j]) {
//         return console.log("🛑🛑🛑" + `Assertion Failed: [${arr1}] !== [${arr2}]`);

//       }
//     }
//   }
//   return console.log("✅✅✅" + `Assertion Passed: [${arr1}] === [${arr2}]`);
// };

// assertArraysEqual(without([1, 2, 3, 4], [3, 4]), [1, 2]);