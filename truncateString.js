function truncateString(str, num) {
    var newStr = "";
    if (num <= 3) {
        newStr = str.slice(0, num) + "...";
        return newStr;
    } else if (str.length > num) {
        newStr = str.slice(0, num-3) + "...";
        return newStr;
    }

    return str;

}

truncateString("A-tisket a-tasket A green and yellow basket", 20);