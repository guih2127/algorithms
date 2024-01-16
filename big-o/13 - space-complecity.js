// O(n) function
// For each element, it increases the number of operations by one.
function boooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('boooo!');
    }
}

boooo([1, 2, 3, 4, 5]); // O(1) Space complexity -> Just one assign, for let i = 0.

function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }

    console.log(hiArray);
    return hiArray;
}

arrayOfHiNTimes(6); // O(n) Space Complexity -> We created a new array and filled it using the loop.