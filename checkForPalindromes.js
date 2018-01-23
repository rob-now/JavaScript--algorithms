function palindrome(str) {
    var newStr = str.replace(/[\W_]/gi, "").toLowerCase();
    var newStrReversed = newStr.split("").reverse().join("");
    if (newStr === newStrReversed) {
        return true;
    } else return false;
}

palindrome("Eye");