// O(1) -> constant type
// no matter how many items we have, we are always making just one operation on this function
// number of operations dont change

function compressFirstBox(boxes) {
    console.log(boxes[0]);
};

const boxes = [0, 1, 2, 3, 4, 5];

// this function still has a linear line
// so besides everything, this will still be an O(1) function, because it is a constant type function.
// we love O(1) because it is very scalable
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // 0(1)
    console.log(boxes[1]); // 0(1)
};

logFirstTwoBoxes(boxes); // O(2)