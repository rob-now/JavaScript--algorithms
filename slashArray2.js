function slasher(arr, howMany) {
    //Return sliced elements from index passed in `howMany` argument
    //to the end of the `arr` length
    //This doesn't alter the original array `arr`
    return arr.slice(howMany);
}

slasher([1, 2, 3, 4, 5, 6, 7, 8], 2);