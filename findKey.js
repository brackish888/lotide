const assertEqual = function(actual, expected) {
  console.log(actual, expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual !== expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual === expected}`);
  }
};

const findKey = function(objex, callback) {
  let allKeys = Object.keys(objex);
  for(let newKey of allKeys) {
    if(callback(objex[newKey])) { 
      // console.log(newKey) //objex[newKey] === callback
      return newKey;
    }
  }
  return undefined;
};

const newObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}; // => "noma"

assertEqual(findKey(newObject, x => x.stars === 2), "noma"); 
assertEqual(findKey(newObject, x => x.stars === 3), "elBulli");
assertEqual(findKey(newObject, x => x.stars === 2), "Ora");
assertEqual(findKey(newObject, x => x.stars === 3), "Akaleri");