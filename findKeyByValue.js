const assertEqual = function(actual, expected) {
  console.log(actual, expected);
  if (actual === expected) {
    console.log`✅✅✅ Assertion Passed: ${actual === expected}`;
  } else if (actual !== expected) {
    console.log`🛑🛑🛑 Assertion Failed: ${actual !== expected}`;
  }
};

const findKeyByValue = function(item, value) {
  let allKeys = Object.keys(item);
  for(const newKey of allKeys) {
    if(item[newKey] === value) {
      return newKey;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);