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

// --------------------------- Challenges with Arrays of Objects ----------------------------------

challenges.findOverage = function (arr) {
  return arr.filter(function (person) {
    // Each person is an object, so we access the age property with dot notation
    return person.age >= 18;
  });
};

challenges.findPythonDevs = function (arr) {

};

challenges.findCorrectDevs = function (arr, language) {

};

challenges.findCheapDevs = function (arr, price) {

};

challenges.findMultipleSkillDevs = function (err, skill1, skill2) {

};

challenges.findMatchingHotels = function (arr, facilities) {

};

module.exports = challenges;
