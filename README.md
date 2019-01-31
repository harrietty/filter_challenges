# Filtering Challenges

In this repo are some challenges to help you practicing filtering arrays.

The first challenge is already implemented using a for loop, and the filter function, for reference.

Remember that `filter` takes a function, which is passed each item of the array one by one. If the function returns `true` the item will be kept, otherwise it will be discarded. Filter always creates a new array, it does not modify the original one.

Use the test suite to help you understand what the functions need to do.

When cloning this repository, first install the dependencies:

    $ npm install

Run the tests to see whether your code is working:

    $ npm test

To hone in on a specific test, or group of tests, use the `.only` notation in the test file:

```javascript
 describe.only('findBobs', function () {
   // tests ...
 });
```

Or:

```javascript
 it.only('is case insensitive', function () {
  const names = ['Henry', 'heather', 'bob', 'Patricia'];
  expect(challenges.findBobs(names)).to.eql(['bob']);
});
```

Remember to remove the `.only` from the test once you're done!
