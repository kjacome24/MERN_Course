const { performance } = require('perf_hooks');
const start = performance.now();
let arrayx = [1, 5, 6, 7, 4, 3, 2]

const left = (pivot,arr) => {
    let left;
    for (let i = 0; i <= pivot; i++) {
        if (arr[i] >= arr[pivot]){
            left =  i;
            return left;
        }
}
}

const right = (pivot,arr) => {
    let right;
    for (let j = arr.length-1; j >= pivot; j--) {
        if (arr[j] <= arr[pivot]){
            right =  j;
            return right;
        }
    }
}

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            console.log("--------------------------------------------------------")
            [arr[0], arr[1]] = [arr[1], arr[0]];
        }
    }
    var pivot = Math.floor(Math.random() * (arrayx.length - 2)) + 1;
    console.log("THe pivot is " + pivot);
    let rightx, leftx;
    rightx = right(pivot, arr);
    // console.log("The right is " + rightx);
    leftx = left(pivot, arr);
    // console.log("The left is " + leftx);
    let temp = arr[rightx];
    arr[rightx] = arr[leftx];
    arr[leftx] = temp;
    // console.log("Here we are 1");
    // console.log(arr);
    do {
        rightx = right(pivot, arr);
        leftx = left(pivot, arr);
        temp = arr[rightx];
        arr[rightx] = arr[leftx];
        arr[leftx] = temp;
    } while (leftx !== rightx);
    var leftArr = arr.slice(0, pivot);
    var rightArr = arr.slice(pivot, arr.length);
    quickSort(leftArr);
    quickSort(rightArr);
    arr = leftArr.concat(rightArr);
    console.log(arr);
    return arr;
}
quickSort(arrayx)

console.log(`This took ${performance.now() - start} milliseconds to run the new reverse function`);