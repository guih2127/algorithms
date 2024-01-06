// What is the Big O of the below function? (Hint, you may want to go line by line)

function funChallenge(input) {
    let a = 10; // first the code declares the variable a and set it to 10 --------> O(1)
    a = 50 + 3; // then it changes the variable to 53, making a sum of 50 + 3 ---------> O(1)
  
    // the function enters on a loop that DEPENDS of the length of the input to determine
    // how many times it will execute

    for (let i = 0; i < input.length; i++) { // -------> O(N)
      anotherFunction(); // it executes another function // -------> O(N)
      let stranger = true; // it defines another variable // -------> O(N)
      a++; // sum 1 to the a variable // -------> O(N)
    }

    // in the end, the function returns the variable a
    return a; // -------> O(1)
}

// 3 O(1) steps + 4 O(n) steps -> 3 + n + n + n + n -> 

// the function is considered O(3 + 4n)