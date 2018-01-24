function repeatStringNumTimes(str, num) {
    var strTimesNum = "";
    for (x = 0; x < num; x++) {
        strTimesNum = strTimesNum + str;
    }
    return strTimesNum;

}

repeatStringNumTimes("abc", 3);