// big o helps to verify how scalable a code is
// we can use the performance module to measure the performance of our instructions
// with arrays with big size, the time gets higher
// the problem is that this measure is made on our local machine, and this is not usually where our code is running
// so we can use big o to compare algorithms, independent of the machine that is running the code
// with big o we care of how many steps we take on a function

const nemo = ['nemo'];

const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

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