const arr = [1,23,7,3,2,4];

function bubbleSort(arr) {
    for (let h = 0; h < arr.length-1; h++) {
        let swapped = false;
        for (let i = 0; i < arr.length-1-h; i++) {
            if (arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

function swap(arr, first, second) {
    arr[first] += arr[second];
    arr[second] = arr[first] - arr[second];
    arr[first] = arr[first] - arr[second];
}

bubbleSort(arr);
console.log(arr);
