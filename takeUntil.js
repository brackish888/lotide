
// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
//   return true;
// };

const assertArraysEqual = function(arr1, arr2) {
  let assert = true;
  if (arr1.length !== arr2.length) assert = false;
  for (let i = 0; i < arr1.length; i++)
    if (arr1[i] !== arr2[i]) assert = false;
  assert
    ? console.log(`✅✅✅ Assertion Passed: These are equal.`)
    : console.log(`🛑🛑🛑 Assertion Failed: These are not equal.`);

};
const takeUntil = function(array, callback) {
  // console.log('array: ', array);
  // console.log('callback: ', callback)

  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','),['I\'ve', 'been', 'to', 'Hollywood']);

const data3 = [1, 2, 4, 5, 6];
assertArraysEqual(takeUntil(data3, x=> x % 3 === 0),[1, 2, 4, 5]);


// expected output
// [ 1, 2, 5, 7, 2 ]
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]