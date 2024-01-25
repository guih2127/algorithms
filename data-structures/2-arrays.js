// 1 - ARRAYS
// arrays organize items sequentially in computers memory, one after another.
// the most simple data structure

const strings = 
    ['a', 'b', 'c', 'd'];
    // 0,  1,  2,  3
// storing data sequentially on the memory

console.log(strings[2]);
// getting an element by it's index

// push (adds something at the end of the array) -> O(1), because we dont loop through anything
strings.push('e');

// pop (remove something at the end of the array) -> O(1) as well
strings.pop();

// unshift (insert something at the beggining of the array) -> as we have to change the index of 
// EVERY ITEM of the array, it's a loop, so it's an O(n) operation
strings.unshift('x');

// splice -> insert items defining an index to begin -> as we have to change the index of
// other items of the array, we have to loop, so it's also O(n) operation
strings.splice(2, 0, 'alien', 'not alien');

console.log(strings);


// basically, with arrays, we have fast operations for lookups and push O(1) because the
// itens are stores sequentially, and this means that we can get an item by it's index
// and insert an item without changing indexes. so those operations are O(1)
// the insert and the delete are O(n) operations, because we need to change the index
// of n array elements on those operations.


// with other languages, we have static arrays, that define the number of indexes
// of the array on it's declaration. for this type of array, an insertion of an item
// can by O(n), because we have to copy the entire array to another space of the memory
// looping through it.


// PROS
// fast lookups, fast push/pop, ordered

// CONS
// slow inserts
// slow deletes
// fixed sizes