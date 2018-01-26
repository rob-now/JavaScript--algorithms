function mutation(arr) {
    //Store `arr` values in lower case in `lowerCaseArr` variable
    var lowerCaseArr = arr.join().toLowerCase().split(",");
    // For loop to iterate through `lowerCaseArr[1]` (second value of array)
    for (i = 0; i < lowerCaseArr[1].length; i++) {
        //Check if letter from `lowerCaseArr[1][i]` is found in `lowerCaseArr[0]`
        //and check if the value of index is `-1` (`-1` in .indexOf means Not Found)
        if (lowerCaseArr[0].indexOf(lowerCaseArr[1][i]) == -1) {
            //If letter not found return false
            return false;
        }
    //Return true if no index with value `-1` is found in the for loop
    } return true;

}
//Test code
mutation(["hello", "lhhEeoHHelLllhoO"]);