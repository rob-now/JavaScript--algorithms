function reverseString(str) {
    var strToArray = str.split("");
    var reversedArray = strToArray.reverse();
    var joinedString = reversedArray.join("");
    return joinedString;
}

reverseString("Hello World! How are you?");