const arr = [1,23,7,3,2,4];

// function countingSort(arr) {
//     //find max value
//     let maxValue = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (maxValue < arr[i]) maxValue = arr[i];
//     }
    
//     //create tmp array with values from 0 to maxValue filled with 0
//     const tmp = new Array(maxValue + 1).fill(0);

//     //counting elements
//     for (let i = 0; i < arr.length; i++) {
//         const idx = arr[i];
//         tmp[idx] += 1;``
//     }

//     //filling arr in increasing order
//     let arrPtr = 0;
//     let tmpPtr = 0;
    
//     for (let i = 0; i < tmp.length; i++) {
//         while(tmp[tmpPtr] !== 0) {
//             tmp[tmpPtr] -= 1;
//             arr[arrPtr] = tmpPtr;
//             arrPtr++;
//         }
//         tmpPtr++;
//     }
// }

function countingSort(arr) {
    const maxValue = Math.max(...arr);

    const countArr = new Array(maxValue + 1).fill(0);

    for(let i = 0; i < arr.length; i++) {
        countArr[arr[i]]++;
    }

    let iter = 0;
    for (let i = 0; i < countArr.length; i++) {
        while(countArr[i] !== 0) {
            arr[iter] = i;
            iter++;
            countArr[i]--;
        }
    }
}


console.log(arr);
countingSort(arr);
console.log(arr);
