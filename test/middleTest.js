const assert = require('chai').assert;
const middle = require('../middle');
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');



describe("#middle", function() {
  it("returns 2 for [1, 2, 3]", function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });
  it("returns string for ['5', 'string', '67']", () => {
    assert.deepEqual(middle(['5', 'string', '67']), ['string'])
  });
});


// assertEqual(middle([5, 6, 7]), 6);

// // console.log(typeof([5, 6, 7]));
// assertEqual((["Hello", "Lighthouse", "Labs"]), "Lighthouse");

// assertArraysEqual(middle([6, 5, 7]), [5]);
// assertArraysEqual(middle(["Each", "Word", "Has"]),["Word"]);