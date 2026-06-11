
function fibonacci(num) {
    if (num == 0) {
        return undefined
    }
    if (num == 1) {
        return [0];
    }
    const fib = [0, 1];
    for (let idx = 2; idx < num; ++idx) {
        fib.push(fib.at(idx - 1) + fib.at(idx - 2));
    }
    return fib;
}

function fibRec(num) {
    // Message logged as requirement
    console.log("This was printed recursively");
    if (num === 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];
    const prev = fibRec(num - 1);
    const nextValue = prev[prev.length - 1] + prev[prev.length - 2];
    return [...prev, nextValue];
}

function mergeSort(arr) {
    // Consumer for the merge portion of the algorithm
    const merge = (first, second) => {
        let firstIdx = 0, secondIdx = 0;
        let resultArray = [];
        while (firstIdx < first.length && secondIdx < second.length) {
            if (first[firstIdx] <= second[secondIdx]) {
                resultArray = [...resultArray, first.at(firstIdx++)];
            } else {
                resultArray = [...resultArray, second.at(secondIdx++)];
            }
        }

        // Check if there are any reminder elements in the first array
        if (firstIdx < first.length) {
            resultArray = [...resultArray, ...first.slice(firstIdx)];
        }

        // Check if there are any reminder elements in the second array
        if (secondIdx < second.length) {
            resultArray = [...resultArray, ...second.slice(secondIdx)];
        }

        return resultArray;
    }

    // Broken the subproblem to a single element array;
    if (arr.length == 1) {
        return arr;
    }

    // Break array in halves
    const middleIdx = arr.length / 2;
    const leftSide = arr.slice(0, middleIdx);
    const rightSide = arr.slice(middleIdx, arr.length);

    // Sort each half
    const sortedLeft = mergeSort(leftSide);
    const sortedRight = mergeSort(rightSide);

    // Merge the sorted portions of the original array
    return merge(sortedLeft, sortedRight);

}

export { fibonacci, fibRec, mergeSort };