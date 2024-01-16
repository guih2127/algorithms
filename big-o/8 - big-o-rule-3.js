// Different terms for inputs

function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function(boxes) {
        console.log(boxes);
    });
}

// this function is O(a + b), and not O(n)
// this happens because we use different terms for different inputs
// as the loops use different inputs, we need to use different terms for each one