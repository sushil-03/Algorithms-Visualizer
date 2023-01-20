const COMPARE = 1,
    SWAP = 2,
    ALREDY_SORTED = 3,
    NEW_SORTED_COLOR = 4,
    PREVIOUS_COLOR = 5;

const quickSort = (Arr) => {
    const objArr = [];
    let arr = Arr.slice();
    quickSortHelper(arr, 0, arr.length - 1, objArr);
    return objArr;
};

function swap(arr, i, j, objArr) {
    objArr.push({
        case: SWAP,
        start: i,
        end: j,
        barOneHeight: `${arr[j]}px`,
        barTwoHeight: `${arr[i]}px`,
    });
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high, objArr) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high; j++) {
        objArr.push({ case: COMPARE, start: j, end: high });
        objArr.push({ case: PREVIOUS_COLOR, start: j, end: high });

        // objArr.push({ case: PREVIOUS_COLOR, start: j, end: high });
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j, objArr);
            objArr.push({ case: PREVIOUS_COLOR, start: i, end: j });
        }
        // else {
        // objArr.push({ case: ALREDY_SORTED, start: j, end: high });
        // }
    }
    // objArr.push({ case: PREVIOUS_COLOR, start: i, end: j });
    swap(arr, i + 1, high, objArr);
    objArr.push({ case: PREVIOUS_COLOR, start: i + 1, end: high });
    // objArr.push({ case: NEW_SORTED_COLOR, start: i+1 });

    return i + 1;
}
function quickSortHelper(arr, low, high, objArr) {
    // if (low < 0 || high < 0 || low >= arr.length || high >= arr.length) return;
    // objArr.push({ case: COMPARE, start: low, end: high });
    if (low <= high) {
        let pi = partition(arr, low, high, objArr);
        objArr.push({ case: NEW_SORTED_COLOR, start: pi });

        // Separately sort elements before
        // partition and after partition
        quickSortHelper(arr, low, pi - 1, objArr);
        quickSortHelper(arr, pi + 1, high, objArr);
    }
}
export default quickSort;
