function destroyer(arr) {
    //For loop to iterate arguments of `arr` starting from the second (x=1)
    for (x = 1; x < arguments.length; x++) {
        //Store index value of `arr` for the matched arguments[x] values
        var indexToRemove = arr.indexOf(arguments[x]);
        //Check if `indexToRemove` has been found
        if (indexToRemove >= 0) {
            //Delete index that has been found
            arr.splice(indexToRemove, 1);
            //Decrement `x` to find more than one occurrence in next loop
            x--;
        }
    }

    return arr;

}
//Test code
destroyer([1, 2, 3, 1, 2, 3], 2, 3, "hello");