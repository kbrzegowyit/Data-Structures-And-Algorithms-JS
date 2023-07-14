const arr = [1,23,7,3,2,4];

function mergeSort(arr, l, r) {
    if (l < r) {
        const m = Number.parseInt(l + (r - l) / 2);
        
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

function merge(arr, l, m, r) {
    const n1 = m - l + 1;
    const n2 = r - m;

    const L = [], R = [];

    for (let i = 0; i < n1; i++) {
        L.push(arr[l + i]);
    }

    for (let j = 0; j < n1; j++) {
        R.push(arr[m + 1 + j]);
    }

    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;  
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

mergeSort(arr, 0, arr.length - 1);
console.log(arr);
