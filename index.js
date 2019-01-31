const challenges = {};

challenges.findIntegers = function (arr) {
  // const ints = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (parseInt(arr[i]) === arr[i]) {
  //     ints.push(arr[i]);
  //   }
  // }
  // return ints;

  return arr.filter(function (num) {
    return parseInt(num) === num;
  });
};

challenges.findStrings = function (arr) {

};

challenges.findBooleans = function (arr) {

};

challenges.findLongWords = function (arr) {

};

challenges.findLargeNums = function (arr) {

};

challenges.findNamesStartingWith = function (arr, letter) {

};

challenges.findBobs = function (arr) {

};

module.exports = challenges;
