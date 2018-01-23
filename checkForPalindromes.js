function palindrome(str) {
    //Replace/delete any non-alphanumeric character and transform string into lower case
    var newStr = str.replace(/[\W_]/gi, "").toLowerCase();
    //Split the string into array, reverse the array and join elements
    var newStrReversed = newStr.split("").reverse().join("");
    //Check two strings for equality and return boolean (true or false)
    return newStr === newStrReversed;
}

palindrome("Eye");