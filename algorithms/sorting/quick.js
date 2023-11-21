// const arr = [1,23,7,3,2,4];
const arr = [6,5,7,2];

function quicksort(arr, left, right) {
    if (left < right) {
        const pivot = partition(arr, left, right);
        console.log(`1) quicksort(${left}, ${pivot})`);
        quicksort(arr, left, pivot - 1);
        console.log(`2) quicksort(${pivot + 1}, ${right})`);
        quicksort(arr, pivot + 1, right);
    }
}

function partition(arr, left, right) {
    const pivot = right;
    let i = left - 1;

    for (let j = left; j <= right - 1; j++) {
        if (arr[j] < arr[pivot]) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, pivot);
    return i + 1;
}

function swap(arr, firstIndex, secondIndex) {
    const tmp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = tmp;
}
console.log(arr);
quicksort(arr, 0, arr.length - 1);
console.log(arr);
