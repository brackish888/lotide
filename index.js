const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual =require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

let indexE = {
  head,
  tail,
  middle,
  eqArrays,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  eqObjects,
  countOnly,
  countLetters,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without
};

module.exports = {
 indexE
};