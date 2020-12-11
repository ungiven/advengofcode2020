// Day 01 - Report Repair
// Answer 1: 840324
// Answer 2; 170098110

var fs = require("fs");

var input = fs.readFileSync("input.txt").toString().split("\n");

// Answer 1
const find_pair = (list) => {
  for (var i of list) {
    for (var j of list) {
      var i = Number(i);
      var j = Number(j);
      if (i + j === 2020) {
        return i * j;
      }
    }
  }
};

// Answer 2
const find_trip = (list) => {
  for (var i of list) {
    for (var j of list) {
      for (var k of list) {
        var i = Number(i);
        var j = Number(j);
        var k = Number(k);
        if (i + j + k === 2020) {
          return i * j * k;
        }
      }
    }
  }
};

console.log("Answer 1: " + find_pair(input));
console.log("Answer 2: " + find_trip(input));
