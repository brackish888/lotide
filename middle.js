const assertEqual = (actual, expected) =>
  (actual[0] === expected) // needs to identify the index if true
    ? console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
  return true;
};


const assertArraysEqual = function(arr1, arr2) {
  let assert = true;
  if (arr1.length !== arr2.length) assert = false;
  for(let i = 0; i < arr1.length; i++)
  if(arr1[i] != arr2[i]) assert = false;
  assert
    ? console.log(`✅✅✅ Assertion Passed: These are equal.`)
    : console.log(`🛑🛑🛑 Assertion Failed: These are not equal.`);
// only cares about length
};

 
const middle = function (arr) {
  let i = 0;
  let result = [];
  // let middleResult = 0;
  if(arr.length == 1 || arr.length == 2 || arr.length == 0){
    return [];
  } else {
    if (arr.length % 2 == 1){
      i = (arr.length - 1)/2;
      result.push(arr[i]);
      return result;
    //   middleResult = result[0];
    // return middleResult;

    } else if (arr.length % 2 == 0){
      i = arr.length / 2;
      result.push(arr[i - 1], arr[i]);
      return result;
    //   middleResult = result[0];
    // return middleResult;
};
    }
  }
    



assertEqual(middle([5, 6, 7]), 6);

// console.log(typeof([5, 6, 7]));
assertEqual((["Hello", "Lighthouse", "Labs"]), "Lighthouse");

assertArraysEqual(middle([6, 5, 7]), [5]);
assertArraysEqual(middle(["Each", "Word", "Has"]),["Word"]);