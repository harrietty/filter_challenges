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
      expect(challenges.findNamesStartingWith(names, 'h')).to.eql(['Henry', 'heather']);
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

  describe('findOverage', function () {
    it('filters an array of people to only include those 18 or over', function () {
      const people = [
        {name: 'Stevie', age: 22},
        {name: 'Brenda', age: 56},
        {name: 'Kerry', age: 17},
        {name: 'Charlotte', age: 18},
      ];

      const expected = [
        {name: 'Stevie', age: 22},
        {name: 'Brenda', age: 56},
        {name: 'Charlotte', age: 18},
      ];

      expect(challenges.findOverage(people)).to.eql(expected);
    });

    it('returns an empty array if no matching people are found', function () {
      const people = [
        {name: 'Stevie', age: 2},
        {name: 'Brenda', age: 6},
        {name: 'Kerry', age: 17},
        {name: 'Charlotte', age: 8},
      ];

      expect(challenges.findOverage(people)).to.eql([]);
    });
  });

  describe('findPythonDevs', function () {
    it('filters an array of people to only return python developers', function () {
      const devs = [
        {name: 'Barry', language: 'Bash'},
        {name: 'Penny', language: 'Python'},
        {name: 'John', language: 'JavaScript'},
        {name: 'Rebecca', language: 'Ruby'},
        {name: 'Jane', language: 'Python'}
      ];

      const expected = [
        {name: 'Penny', language: 'Python'},
        {name: 'Jane', language: 'Python'}
      ];

      expect(challenges.findPythonDevs(devs)).to.eql(expected);
    });

    it('returns an empty array if no matching devs are found', function () {
      const devs = [
        {name: 'Barry', language: 'Bash'},
        {name: 'Penny', language: 'Perl'},
        {name: 'John', language: 'JavaScript'},
        {name: 'Rebecca', language: 'Ruby'},
        {name: 'Jane', language: 'Perl'}
      ];

      expect(challenges.findPythonDevs(devs)).to.eql([]);
    });
  });

  describe('findCorrectDevs', function () {
    it('returns a filtered array of devs based on the required languages', function () {
      const devs = [
        {name: 'Barry', language: 'Bash'},
        {name: 'Penny', language: 'Perl'},
        {name: 'John', language: 'JavaScript'},
        {name: 'Rebecca', language: 'Ruby'},
        {name: 'Jane', language: 'Perl'}
      ];

      const requiredLangs = ['Ruby', 'Perl'];

      const expected = [
        {name: 'Penny', language: 'Perl'},
        {name: 'Rebecca', language: 'Ruby'},
        {name: 'Jane', language: 'Perl'}
      ];

      expect(challenges.findCorrectDevs(devs, requiredLangs)).to.eql(expected);
    });

    it('returns correct devs if devs matching only 1 of the required languages is found', function () {
      const devs = [
        {name: 'Barry', language: 'Bash'},
        {name: 'Penny', language: 'Perl'},
        {name: 'John', language: 'JavaScript'},
        {name: 'Rebecca', language: 'Ruby'},
        {name: 'Jane', language: 'Perl'}
      ];

      const requiredLangs = ['Ruby', 'C#'];

      const expected = [
        {name: 'Rebecca', language: 'Ruby'}
      ];

      expect(challenges.findCorrectDevs(devs, requiredLangs)).to.eql(expected);
    });

    it('returns an empty array if no matching devs are found', function () {
      const devs = [
        {name: 'Barry', language: 'Bash'},
        {name: 'Penny', language: 'Perl'},
        {name: 'John', language: 'JavaScript'},
        {name: 'Rebecca', language: 'Ruby'},
        {name: 'Jane', language: 'Perl'}
      ];

      const requiredLangs = ['C#', 'GoLang'];

      expect(challenges.findCorrectDevs(devs, requiredLangs)).to.eql([]);
    });
  });

  describe('findCheapDevs', function () {
    it('returns a filtered array of devs based on the maximum price', function () {
      const devs = [
        {name: 'Barry', language: 'Bash', pricePerHour: 30},
        {name: 'Penny', language: 'Perl', pricePerHour: 15},
        {name: 'John', language: 'JavaScript', pricePerHour: 40},
        {name: 'Rebecca', language: 'Ruby', pricePerHour: 35},
        {name: 'Jane', language: 'Perl', pricePerHour: 10},
        {name: 'Fiona', language: 'HTML', pricePerHour: 20}
      ];
      
      const maxPrice = 20;

      const expected = [
        {name: 'Penny', language: 'Perl', pricePerHour: 15},
        {name: 'Jane', language: 'Perl', pricePerHour: 10},
        {name: 'Fiona', language: 'HTML', pricePerHour: 20}
      ];

      expect(challenges.findCheapDevs(devs, maxPrice)).to.eql(expected);
    });

    it('returns an empty array if no cheap enough devs are found', function () {
      const devs = [
        {name: 'Barry', language: 'Bash', pricePerHour: 30},
        {name: 'Penny', language: 'Perl', pricePerHour: 25},
        {name: 'John', language: 'JavaScript', pricePerHour: 40},
        {name: 'Rebecca', language: 'Ruby', pricePerHour: 35},
        {name: 'Jane', language: 'Perl', pricePerHour: 30},
        {name: 'Fiona', language: 'HTML', pricePerHour: 50}
      ];

      const maxPrice = 20;

      expect(challenges.findCheapDevs(devs, maxPrice)).to.eql([]);
    });
  });

  describe('findMultipleSkillDevs', function () {
    it('returns an array of devs who match both required skills', function () {
      const devs = [
        {name: 'Paul', languages: ['Ruby', 'JavaScript', 'Bash']},
        {name: 'Sally', languages: ['C#', 'JavaScript']},
        {name: 'Naomi', languages: ['Ruby', 'Perl', 'Bash', 'JavaScript']},
        {name: 'Roger', languages: ['CSS', 'HTML', 'JavaScript', 'Bash']},
        {name: 'Paul', languages: ['Ruby']},
      ];

      expect(challenges.findMultipleSkillDevs(devs, 'Bash', 'Ruby')).to.eql([
        {name: 'Paul', languages: ['Ruby', 'JavaScript', 'Bash']},
        {name: 'Naomi', languages: ['Ruby', 'Perl', 'Bash', 'JavaScript']}
      ]);
    });

    it('returns a empty array if no devs have both matching skills', function () {
      const devs = [
        {name: 'Paul', languages: ['Ruby', 'JavaScript', 'Bash']},
        {name: 'Sally', languages: ['C#', 'JavaScript']},
        {name: 'Naomi', languages: ['Ruby', 'Perl', 'Bash', 'JavaScript']},
        {name: 'Roger', languages: ['CSS', 'HTML', 'JavaScript', 'Bash']},
        {name: 'Paul', languages: ['Ruby']},
      ];

      expect(challenges.findMultipleSkillDevs(devs, 'HTML', 'Python')).to.eql([]);
    });
  });

  describe('findMatchingHotels', function () {
    it('finds hotels with all the criteria listed in the array of criteria', function () {
      const hotels = [
        {name: 'Grand Budapest', facilities: ['Parking', 'Room Service', 'Spa', 'Gym', '24-hour Check-in']},
        {name: 'Great Lakes', facilities: ['Parking', '24-hour Check-in']},
        {name: 'The Swan', facilities: ['Room Service', '24-hour Check-in']},
        {name: 'The Mandarin', facilities: ['Parking', 'Room Service', 'Spa', 'Gym']},
        {name: 'Seven Dials', facilities: ['24-hour Check-in']},
        {name: 'The Continental', facilities: ['Parking', 'Room Service', '24-hour Check-in', 'Continental Breakfast']},
        {name: 'The Juniper Inn', facilities: ['Spa', 'Gym']},
      ];

      const criteria = ['Parking', 'Gym'];

      const expected = [
        {name: 'Grand Budapest', facilities: ['Parking', 'Room Service', 'Spa', 'Gym', '24-hour Check-in']},
        {name: 'The Mandarin', facilities: ['Parking', 'Room Service', 'Spa', 'Gym']},
      ];

      expect(challenges.findMatchingHotels(hotels, criteria)).to.eql(expected);
    });

    it('returns an empty array if no hotels match all criteria', function () {
      const hotels = [
        {name: 'Grand Budapest', facilities: ['Parking', 'Room Service', 'Spa', 'Gym', '24-hour Check-in']},
        {name: 'Great Lakes', facilities: ['Parking', '24-hour Check-in']},
        {name: 'The Swan', facilities: ['Room Service', '24-hour Check-in']},
        {name: 'The Mandarin', facilities: ['Parking', 'Room Service', 'Spa', 'Gym']},
        {name: 'Seven Dials', facilities: ['24-hour Check-in']},
        {name: 'The Continental', facilities: ['Parking', 'Room Service', '24-hour Check-in', 'Continental Breakfast']},
        {name: 'The Juniper Inn', facilities: ['Spa', 'Gym']},
      ];

      const criteria = ['Parking', 'Gym', 'Continental Breakfast'];

      expect(challenges.findMatchingHotels(hotels, criteria)).to.eql([]);
    });
  });
});
