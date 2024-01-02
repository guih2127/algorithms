const nemo = ['nemo'];

const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// as our array count and, in consequence, our number of inputs, gets higher, our number of operations
// gets increase as well.
// this function has a notation of O(N) -> linear
// it takes a linear time do find nemo, because every input generates an operation
// O(n) -> probably the most common big O notation.
// the O(n) executes the same algorithm for each item of a list.
// O(n) -> linear time

const large = new Array(100).fill('not nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found nemo');
        }
    }

    console.log('call to find nemo took ' + (t1 - t0)  + ' ml for array with ' + array.length + ' elements');
};

findNemo(large);