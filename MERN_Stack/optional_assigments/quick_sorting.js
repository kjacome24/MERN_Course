const { performance } = require('perf_hooks');
const start = performance.now();

const quickSort = (arr, low, high) => {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

const partition = (arr, low, high) => {
    let pivotIndex = getRandomInt(low, high); // Get a random pivot index
    let pivot = arr[pivotIndex];
    console.log(pivot);
    let i = low - 1;
    let j = high + 1;

    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);

        do {
            j--;
        } while (arr[j] > pivot);

        if (i >= j) {
            return j;
        }

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arrayx = [1, 5, 6, 7, 4, 3, 2];
console.log(quickSort(arrayx, 0, arrayx.length - 1));






console.log(`This took ${performance.now() - start} milliseconds to run the new reverse function`);




--------------------------------------------------------

const { performance } = require('perf_hooks');
const start = performance.now();

const arrayx = [1, 5, 6, 7, 4, 3, 2];
function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return; // Base case: a segment of length 0 or 1 is already sorted
    }

    let pivotIndex = partition(arr, start, end); // Partition the array and get the pivot index

    quickSort(arr, start, pivotIndex - 1); // Recursively sort the left part
    quickSort(arr, pivotIndex + 1, end); // Recursively sort the right part
}

function partition(arr, start, end) {
    const pivotValue = arr[end]; // Choosing the pivot as the last element
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]; // Swap elements
            pivotIndex++;
        }
    }

    // Swap the pivot element to its correct position
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

    return pivotIndex; // Return the pivot index
}

quickSort(arrayx);
console.log(arrayx);

console.log(`This took ${performance.now() - start} milliseconds to run the new reverse function`);