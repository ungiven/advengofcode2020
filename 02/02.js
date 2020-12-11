// Day 2: Password Philosophy
// Answer 1: 569
// Answer 2: 346

var fs = require("fs");

var input = fs.readFileSync("input.txt").toString().split("\n");

var re = /(\d+)\-(\d+)\s(\D)\:\s(.+)/;

const xor = (a, b) => {
  return (a || b) && !(a && b);
};

const verifyPassword = (item) => {
  if (!item) return false;

  var matches = item.match(re);
  var min = Number(matches[1]);
  var max = Number(matches[2]);
  var letter = matches[3];
  var password = matches[4];

  var count = [...password].filter((x) => x === letter).length;
  console.log(count);

  return min <= count && count <= max;
};

const verifyPasswordAgain = (item) => {
  if (!item) return false;

  var matches = item.match(re);
  var min = Number(matches[1]);
  var max = Number(matches[2]);
  var letter = matches[3];
  var password = matches[4];

  //var count = [...password].filter((x) => x === letter).length;
  //console.log(count);

  /*if (
      (password[min - 1] == letter || password[max - 1] == letter) &&
      !(password[min - 1] == letter && password[max - 1] == letter)
    ) {*/
  return xor(password[min - 1] == letter, password[max - 1] == letter);
};
//console.log(input[0].find(re));
//console.log(input[0].match(re));

console.log("Answer 1: " + input.filter(verifyPassword).length);
console.log("Answer 2: " + input.filter(verifyPasswordAgain).length);
