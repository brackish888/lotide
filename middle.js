const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
 
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
    



module.exports = middle;