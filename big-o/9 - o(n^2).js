const boxes = ['a', 'b', 'c', 'd', 'e'];

// When we see nested loops, we use multiplications
// So, this function is a O(n^2) -> Quadradic time
// Every time the number of the elements of the array increases, the time of execution increases in a quadratic time.
// for example, if we add 3 elements into this array, we are going to have 9 new operations on this function
// this type of function is considered horrible, becase it can become very slow.
function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes);