const assertArraysEqual = function(arr1, arr2) {
  let assert = true;
  if (arr1.length !== arr2.length) assert = false;
  for(let i = 0; i < arr1.length; i++)
  if(arr1[i] !== arr2[i]) assert = false;
  assert
  ? console.log(`✅✅✅ Assertion Passed: These are equal.`)
  : console.log(`🛑🛑🛑 Assertion Failed: These are not equal.`);
  
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
  return true;
};

const map = function(array, callback) {
  
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);


const plants = [
  {name : "Shelby", type : "Tree", halfOfWaterNeeds : 8},
  {name : "Anon", type : "Desert", halfOfWaterNeeds : 2},
  {name : "Melody", type : "Climbing", halfOfWaterNeeds : 14}
]
assertArraysEqual(map(plants, plant => plant.name), ["Shelby", "Anon", "Melody"]);
assertArraysEqual(map(plants, plant => plant.halfOfWaterNeeds/2), [4, 1, 7]);
assertArraysEqual(map(plants, plant => plant.type), ["Tree", "Desert", "Climbing"]);
