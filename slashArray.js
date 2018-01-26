function slasher(arr, howMany) {
    //Remove elements from index 0 to index passed in
    //`howMany` argument (excluded) from `arr`
    //This alters the original array `arr`
    arr.splice(0, howMany);
    return arr;
}

slasher([1, 2, 3, 4, 5, 6, 7, 8], 2);