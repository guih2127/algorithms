// Rule 2 - Drop the constants

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

// O(1 + n/2 + 100)
// we dont care about the specifics, we just care for the big(o) graphic

// this function is O(n), because it is still a linear function. '