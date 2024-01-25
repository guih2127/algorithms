// hash tables are basically objects.
// on javascript, they are objects. on python, they are dictionaries
// java has maps and ruby has hashes
// on c#, we also have the hashtable class.
// hashtables basically store key value pairs where the keys are used as indices
// and help us to locate values fast.
// we allocate a space in the memory to store both the key and the value.

// a hash function is a function that generates a hash value (a random value using a pattern), using
// some informed value. usually, if we inform the same input, it will give the same result.
// the good about this is that we get a really fast value access when we use this pattern.

// the hash function is usually a responsability of the language that we are working and it has an
// O(1) notation, as it's very fast.

// insert O(1) --> we dont have to shift index, as we are not working with arrays
// lookup O(1) --> we can search by the hash function itself
// delete O(1) --> we dont have to shift index, as we are not working with arrays
// search O(1) --> we can search by the hash function itself

let user = {
    // all this properties are stored somewhere in memory, and can be accessed really fast
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log("aaaaaaaah!");
    }
}

console.log(user.age); // O(1)
console.log(user);

user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)

// one of the bad things that can happen with hash values is the COLISION:
// colision is when two values are allocated on the same space of the memory
// with a colision, the reading and writing of the hash table becomes 
// O(n). this happens because, when we have more than a value on a memory space,
// we have to check all of then to find what we want.