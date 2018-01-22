function reverseString(str) {
    //Checking if str is a string
    if (typeof str !== 'string') {
        return "Not a string";
    }
    //If str is a string then this will be executed
    var strToArray = str.split("");
    var reversedArray = strToArray.reverse();
    var joinedString = reversedArray.join("");
    return joinedString;
}

//Pass the argument to check the code
reverseString("Hello World! How are you?");