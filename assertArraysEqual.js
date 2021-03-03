const assertArraysEqual = function(arr1, arr2) {
  let assert = true;
  if (arr1.length !== arr2.length) assert = false;
  for(let i = 0; i < arr1.length; i++)
  if(arr1[i] !== arr2[i]) assert = false;
  assert
    ? console.log(`✅✅✅ Assertion Passed: These are equal.`)
    : console.log(`🛑🛑🛑 Assertion Failed: These are not equal.`);

};
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);