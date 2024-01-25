function mergeSortedArrays(arr1, arr2) {
    arr2.forEach(element => {
        arr1.push(element);
    });

    return arr1;
}

// the easy js way
function mergeSortedArrays2(arr1, arr2) {
    return [...arr1, ...arr2];
};

console.log(mergeSortedArrays([1, 2, 3], [7, 8, 9]));