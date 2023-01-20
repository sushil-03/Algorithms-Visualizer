const COMPARE = 1,
    SWAP = 2,
    ALREDY_SORTED = 3,
    NEW_SORTED_COLOR = 4,
    PREVIOUS_COLOR = 5;

const linearSearch = (Arr, Target) => {
    console.log(Target);
    const objArr = [];
    let arr = Arr.slice();
    for (let i = 0; i < Arr.length; i++) {
        objArr.push({ case: COMPARE, start: i, end: i });
        objArr.push({ case: PREVIOUS_COLOR, start: i, end: i });

        if (arr[i] == Target) {
            objArr.push({ case: NEW_SORTED_COLOR, start: i, end: i });
            return objArr;
            break;
            // return i;
        }
    }
    return objArr;
};
export default linearSearch;
