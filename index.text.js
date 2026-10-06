const mergeSort = require("./index");

test("sorts an array of numbers", () => {
    expect(mergeSort([5, 2, 3, 4, 1])).toEqual([1, 2, 3, 4, 5]);
});

test("sorts an array with duplicates", () => {
    expect(mergeSort([3, 3, 1, 2, 1])).toEqual([1, 1, 2, 3, 3]);
});

test("sorts an already sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("sorts a reverse-sorted array", () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test("handles an empty array", () => {
    expect(mergeSort([])).toEqual([]);
});

test("handles an array with one element", () => {
    expect(mergeSort([42])).toEqual([42]);
});

test("sorts a larger array", () => {
    expect(mergeSort([38, 12, 27, 43, 9, 31, 18, 25]))
        .toEqual([9, 12, 18, 25, 27, 31, 38, 43]);
});