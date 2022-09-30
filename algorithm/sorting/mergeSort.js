// export function getMergeSortAnimation(array) {
//     const animation = [];

//     //duplicating array
//     const auxiliaryArray = array.slice();
//     mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animation);
//     console.log(array);
//     return animation;
// }
// function mergeSortHelper(array, startIndx, endIndx, auxiliaryArray, animation) {
//     if (startIndx === endIndx) return;
//     //const midIndx = Math.floor(startIndx + (endIndx - startIndx) / 2);
//     const midIndx = Math.floor((startIndx + endIndx) / 2);
//     mergeSortHelper(auxiliaryArray, startIndx, midIndx, array, animation);
//     mergeSortHelper(auxiliaryArray, midIndx + 1, endIndx, array, animation);
//     merge(array, startIndx, midIndx, endIndx, auxiliaryArray, animation);
// }
// function merge(array, startIndx, midIndx, endIndx, auxiliaryArray, animation) {
//     let k = startIndx,
//         i = startIndx,
//         j = midIndx + 1;
//     while (i <= midIndx && j <= endIndx) {
//         //Change the color
//         animation.push([i, j]);

//         //Revert the color
//         animation.push([i, j]);

//         if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//             animation.push([k, auxiliaryArray[i]]);
//             array[k++] = auxiliaryArray[i++];
//         } else {
//             animation.push([k, auxiliaryArray[j]]);
//             array[k++] = auxiliaryArray[j++];
//         }
//     }
//     while (i <= midIndx) {
//         animation.push([i, i]);
//         animation.push([i, i]);
//         animation.push([k, auxiliaryArray[i]]);
//         array[k++] = auxiliaryArray[i++];
//     }
//     while (j <= endIndx) {
//         animation.push([j, j]);
//         animation.push([j, j]);
//         animation.push([k, auxiliaryArray[i]]);

//         array[k++] = auxiliaryArray[j++];
//     }
// }
export function getMergeSortAnimation(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(
        auxiliaryArray,
        middleIdx + 1,
        endIdx,
        mainArray,
        animations
    );
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, i]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([j, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([j, j]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}
