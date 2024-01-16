function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found nemo');
        }
    }

    console.log('call to find nemo took ' + (t1 - t0)  + ' ml for array with ' + array.length + ' elements');
};

// another way to write functions and loops in js
const findNemo2 = array => {
    array.forEach(element => {
        if (element === 'nemo') {
            console.log('Found nemo');
        }
    });
};