function titleCase(str) {
    //Transform string into lower case and split it into array
    var array = str.toLowerCase().split(" ");
    //Iterate over array items and transform each first letter into upper case
    var newStr = array.map(function (val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    //Join array items into a string
    return newStr.join(" ");

}

titleCase("sHoRt AnD sToUt");