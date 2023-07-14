const arr = [1,23,7,3,2,4];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j+1] < arr[j]) {
                swap(arr, j, j+1);
                swapped = true;
            }
            if (swapped) break;
        }
    }
}

function swap(arr, first, second) {
    arr[first] += arr[second];
    arr[second] = arr[first] - arr[second];
    arr[first] = arr[first] - arr[second];
}

bubbleSort(arr);
console.log(arr);
