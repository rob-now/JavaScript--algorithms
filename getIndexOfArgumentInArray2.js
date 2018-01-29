function getIndexToIns(arr, num) {
    //Variable to store the counting how many times `num` is bigger than `arr` values
    var count = 0;
    //For loop to check if `num` is bigger than each `arr` value
    for (x = 0; x < arr.length; x++) {
        if (num > arr[x]) {
            //If `num` is bigger then increase `count` variable by 1
            count++;
        }

    }
    //Return the value of `count` which is the lowest index of `num` in `arr`
    return count;
}
//Test code
getIndexToIns([0, 1, 9, 10, 2, 2, 2, 5, 10], 3);