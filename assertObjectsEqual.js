const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
  return true;
};
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;

  } else {
    for (let key of keys1) {
      let newObject1 = object1[key];
      let newObject2 = object2[key];
      if (Array.isArray(newObject1) && Array.isArray(newObject2)) {
        return eqArrays(newObject1, newObject2);

      } else {
        if (newObject1 !== newObject2) {
          return false;
        }
      }
      
    }
    return true;
  }
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // console.log(`util: ${inspect(actual)}`);
  if (eqObjects(actual,expected)) {
    console.log("✅✅✅ Assertion Passed:", actual, "===" , expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed:", actual, "!==", expected);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));
const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2));