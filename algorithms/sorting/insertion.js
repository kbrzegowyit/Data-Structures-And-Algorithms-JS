const arr = [1,23,7,7,3,2,4];

// First approach

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let right = i;
//         let left = right - 1;
//         const current = arr[right];
//         while (left >= 0 && arr[left] > current) {
//             arr[right] = arr[left];
//             right--;
//             left--;
//         }
//         arr[right] = current;
//     }
// }

function insertionSort(arr) {
   for (let i = 1; i < arr.length; i++) {
        const unsortedItem = arr[i];
        let sortedPtr = i - 1;
        while(sortedPtr >= 0 && unsortedItem < arr[sortedPtr]) {
            arr[sortedPtr + 1] = arr[sortedPtr];
            sortedPtr -= 1;
        }
        arr[sortedPtr + 1] = unsortedItem;
   }
}

insertionSort(arr);
console.log(arr);
