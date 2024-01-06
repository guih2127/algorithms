// Rule 1 -> Worst case

const nemo = ['nemo'];

const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// Big O always take the worst case in consideration. In this case, even if we have the break
// on the function, we need to assume that the nemo can be the last element of the array.

const large = new Array(100).fill('not nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found nemo');
            break;
        }
    }

    console.log('call to find nemo took ' + (t1 - t0)  + ' ml for array with ' + array.length + ' elements');
};

findNemo(large);