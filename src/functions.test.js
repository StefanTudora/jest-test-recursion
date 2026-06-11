import { fibonacci, fibRec, mergeSort } from "./functions";

test('0 -> undifined', () => {
    expect(fibonacci(0)).toEqual(undefined);
});

test('1 -> [0]', () => {
    expect(fibonacci(1)).toEqual([0]);
});

test('3 -> [0, 1, 1]', () => {
    expect(fibonacci(3)).toEqual([0, 1, 1]);
});

test('3 -> [0, 1, 1]', () => {
    expect(fibRec(3)).toEqual([0, 1, 1]);
});

test('8 -> [0, 1, 1, 2, 3, 5, 8, 11]', () => {
    expect(fibRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test('[3, 2, 100, 99, 1, 2.4] -> sort -> [1, 2, 2.4, 3, 99, 100]', () => {
    expect(mergeSort([3, 2, 100, 99, 1, 2.4])).toEqual([1, 2, 2.4, 3, 99, 100]);
});

test('[-3, -35.5, 2e10, 2] -> sort -> [-35.5, -3, 2, 2e10]', () => {
    expect(mergeSort([-3, -35.5, 2e10, 2])).toEqual([-35.5, -3, 2, 2e10]);
});


