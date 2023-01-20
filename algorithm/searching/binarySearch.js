const COMPARE = 1,
    SWAP = 2,
    ALREDY_SORTED = 3,
    NEW_SORTED_COLOR = 4,
    PREVIOUS_COLOR = 5;

const binarySearch = (Arr, Target) => {
    console.log(Target);
    const objArr = [];
    let arr = Arr.slice();
    binarySearchHelper(arr, 0, Arr.length - 1, Target, objArr);
    return objArr;
};
export default binarySearch;

function binarySearchHelper(arr, l, r, x, objArr) {
    if (l < 0 || r < 0 || l >= arr.length || r >= arr.length) return;
    objArr.push({ case: COMPARE, start: l, end: r });
    objArr.push({ case: PREVIOUS_COLOR, start: l, end: r });
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);
        objArr.push({ case: COMPARE, start: mid, end: mid });
        objArr.push({ case: PREVIOUS_COLOR, start: mid, end: mid });
        // If the element is present at the middle
        // itself
        if (arr[mid] == x) {
            objArr.push({ case: NEW_SORTED_COLOR, start: mid, end: mid });
            return mid;
        }

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x) return binarySearchHelper(arr, l, mid - 1, x, objArr);

        // Else the element can only be present
        // in right subarray
        return binarySearchHelper(arr, mid + 1, r, x, objArr);
    }

    // We reach here when element is not
    // present in array
    return objArr;
}
