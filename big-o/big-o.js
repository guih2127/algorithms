// big o helps to verify how scalable a code is
// we can use the performance module to measure the performance of our instructions
// with arrays with big size, the time gets higher

const nemo = ['nemo'];

const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const large = new Array(100).fill('not nemo');

function findNemo(array) {
    let t0 =  performance.now();

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found nemo');
        }
    }

    let t1 = performance.now();

    console.log('call to find nemo took ' + (t1 - t0)  + ' ml for array with ' + array.length + ' elements');
};

findNemo(large);