// Create a function that reverses a string:
// "Hi My name is Andrei" should be: "ierdnA si eman iH"

function reverse(str) {
    let newString = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[str.length - 1 - i];
        newString += char;
    }

    return newString;
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

var newString = reverse("Hi My name is Andrei");

console.log(newString);