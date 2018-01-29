function getIndexToIns(arr, num) {
    //Sort `arr` in ascending order
    arr.sort(function(valA, valB){
        return valA - valB;
    });
    //For loop to check if the number in `arr` is bigger or equal to `num`
    for (x = 0; x < arr.length; x++) {
        if (arr[x] >= num) {
            //Return index of the value bigger or equal to `num`
            return x;
        }
    }
    //If no value bigger or equal to `num` then return the length of `arr`
    return arr.length;
}
//Test code
getIndexToIns([2, 2, 2, 5, 10], 3);