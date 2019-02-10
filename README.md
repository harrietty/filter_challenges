# Filtering Challenges

In this repo are some challenges to help you practicing filtering arrays.

The first challenge is already implemented using a for loop, and the filter function, for reference.

Remember that `filter` takes a function, which is passed each item of the array one by one. If the function returns `true` the item will be kept, otherwise it will be discarded. Filter always creates a new array, it does not modify the original one.

Use the test suite to help you understand what the functions need to do.

### Instructions

Fork and clone this repository.

After cloning, `cd` into the repository.

Once inside the directory `filter_challenges`, first install the dependencies:

    $ npm install

Run the tests to see whether your code is working:

    $ npm test
    
The output will initially show you that the fist function is passing all its tests, but the other functions' tests are failing.

You can see what the tests are testing for in the `spec/index.spec.js` file.

You will need to implement the code in each function that makes the tests pass. It is advisable to focus on one test at a time - tests for each function generally start with the basic functionality, and then add more specific tests for edge cases. After implementing some code, run the tests again to see whether you've made the test green.

If you are getting annoyed by all the output every time you run the tests and want to hone in on a specific test, or group of tests, use the `.only` notation in the test file:

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

## Pulling in additional challenges

To pull in additional challenges, add my original repository as an additional remote repository with the following command:

`$ git remote add upstream https://github.com/harrietty/filter_challenges.git`

To pull in changes from the upstream repository, first ensure your local branch is "clean" (you have no uncommitted changes). If you run `git status` and you see files that are waiting to be committed, commit them before proceeding.

Then run:

`$ git pull upstream master`

If this succeeds, you should see additional challenges in the `index.js` file.

You can see the new commits you've pulled in by running `git log`

