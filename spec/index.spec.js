const expect = require('chai').expect;
const challenges = require('../index');

describe('Filter challenges', function () {
  describe('findIntegers', function () {
    it('returns [1] when passed [1]', function () {
      expect(challenges.findIntegers([1])).to.eql([1]);
    });

    it('returns [1, 2] when passed [1, 2]', function () {
      expect(challenges.findIntegers([1, 2])).to.eql([1, 2]);
    });

    it('returns [1, 2] when passed [1, 2, 0.4]', function () {
      expect(challenges.findIntegers([1, 2, 0.4])).to.eql([1, 2]);
    });

    it('returns [] when passed [0.9]', function () {
      expect(challenges.findIntegers([0.9])).to.eql([]);
    });

    it('returns [100, 309, 588, 7] when passed [100, 101.4, 309, 553.23, 588, 0.2, 7]', function () {
      expect(challenges.findIntegers([100, 101.4, 309, 553.23, 588, 0.2, 7])).to.eql([100, 309, 588, 7]);
    });
  });

  describe('findStrings', function () {
    it('returns ["foo"] when passed ["foo"]', function () {
      expect(challenges.findStrings(['foo'])).to.eql(['foo']);
    });

    it('returns ["foo", "bar"] when passed ["foo", "bar"]', function () {
      expect(challenges.findStrings(['foo', 'bar'])).to.eql(['foo', 'bar']);
    });

    it('returns ["foo", "bar"] when passed ["foo", "bar", 4]', function () {
      expect(challenges.findStrings(['foo', 'bar', 4])).to.eql(['foo', 'bar']);
    });

    it('returns ["foo", "bar"] when passed ["foo", "bar", 4, true]', function () {
      expect(challenges.findStrings(['foo', 'bar', 4, true])).to.eql(['foo', 'bar']);
    });

    it('returns ["foo", "bar"] when passed ["foo", "bar", 4, true, []]', function () {
      expect(challenges.findStrings(['foo', 'bar', 4, true, []])).to.eql(['foo', 'bar']);
    });

    it('returns [] when passed [ 4, true, []]', function () {
      expect(challenges.findStrings([4, true, []])).to.eql([]);
    });
  });

  describe('findBooleans', function () {
    it('returns [true] when passed [true]', function () {
      expect(challenges.findBooleans([true])).to.eql([true]);
    });
    
    it('returns [true, false] when passed [true, false]', function () {
      expect(challenges.findBooleans([true, false])).to.eql([true, false]);
    });

    it('returns [true, false] when passed [true, false, "bar"]', function () {
      expect(challenges.findBooleans([true, false, "bar"])).to.eql([true, false]);
    });

    it('returns [true, false] when passed [true, false, "bar", 4, []]', function () {
      expect(challenges.findBooleans([true, false, "bar", 4, []])).to.eql([true, false]);
    });

    it('returns [] when passed ["bar", 4, []]', function () {
      expect(challenges.findBooleans(["bar", 4, []])).to.eql([]);
    });
  });

  describe('findLongWords', function () {
    it('filters an array to only include words over 8 letters', function () {
      const words = ['foo', 'bar', 'hippopotamus'];
      expect(challenges.findLongWords(words)).to.eql(['hippopotamus']);
    });

    it('removes anything from the array with is not a string', function () {
      const words = ['foo', 'bar', 'hippopotamus', 64, true];
      expect(challenges.findLongWords(words)).to.eql(['hippopotamus']);
    });
    
    it('returns an empty array if no long words are found', function () {
      const words = ['foo', 'bar', 64, true];
      expect(challenges.findLongWords(words)).to.eql([]);
    });
  });

  describe('findLargeNums', function () {
    it('filters an array to only include numbers over 100', function () {
      const nums = [3, 101, 44];
      expect(challenges.findLargeNums(nums)).to.eql([101]);
    });

    it('removes anything from the array with is not a number', function () {
      const nums = ['foo', 'bar', 101, 64, true, []];
      expect(challenges.findLargeNums(nums)).to.eql([101]);
    });
    
    it('returns an empty array if no large numbers are found', function () {
      const nums = [1, 2, 3, 11];
      expect(challenges.findLargeNums(nums)).to.eql([]);
    });
  });

  describe('findNamesStartingWith', function () {
    it('filters an array of names to only include those beginning with specified letter', function () {
      const names = ['Henry', 'Heather', 'Paul', 'Patricia'];
      expect(challenges.findNamesStartingWith(names, 'H')).to.eql(['Henry', 'Heather']);
    });
    
    it('is case insensitive', function () {
      const names = ['Henry', 'heather', 'Paul', 'Patricia'];
      expect(challenges.findNamesStartingWith(names, 'h')).to.eql(['Henry', 'Heather']);
    });

    it('ignores anything that is not a string', function () {
      const names = ['Henry', 'Heather', true, 'Paul', {}, 'Patricia', 55];
      expect(challenges.findNamesStartingWith(names, 'H')).to.eql(['Henry', 'Heather']);
    });

    it('returns an empty array if no names are found with the specified letter', function () {
      const names = ['Henry', 'heather', 'Paul', 'Patricia'];
      expect(challenges.findNamesStartingWith(names, 'J')).to.eql([]);
    });
  });

  describe('findBobs', function () {
    it('filters an array of names to only include people called Bob', function () {
      const names = ['Henry', 'Heather', 'Bob', 'Patricia'];
      expect(challenges.findBobs(names)).to.eql(['Bob']);
    });
    
    it('is case insensitive', function () {
      const names = ['Henry', 'heather', 'bob', 'Patricia'];
      expect(challenges.findBobs(names)).to.eql(['bob']);
    });

    it('can identify Bobs with a surname', function () {
      const names = ['Henry', 'heather', 'Bob Jenkins', 'bob snaith', 'Patricia'];
      expect(challenges.findBobs(names)).to.eql(['Bob Jenkins', 'bob snaith']);
    });

    it('ignores anything that is not a string', function () {
      const names = ['Henry', 'Heather', true, 'Bob', {}, 'Patricia', 55];
      expect(challenges.findBobs(names)).to.eql(['Bob']);
    });

    it('returns an empty array if no Bobs are found', function () {
      const names = ['Henry', 'heather', 'Paul', 'Patricia'];
      expect(challenges.findBobs(names)).to.eql([]);
    });
  });
});
