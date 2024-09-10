const twoSum = require('./two_sum');

// File: Must_Solve_Problems/Solutions/two_sum.test.js

test('Example 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('Example 2', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('Example 3', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test('Additional Test 1', () => {
    expect(twoSum([1, 2, 3, 4, 5], 9)).toEqual([3, 4]);
});

test('Additional Test 2', () => {
    expect(twoSum([0, -1, 2, -3, 1], -2)).toEqual([1, 3]);
});