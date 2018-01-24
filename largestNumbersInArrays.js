function largestOfFour(arr) {
    //Variable to store new array of max values from `arr`
    var maxArr = [];
    //For loop to iterate through `arr`
    for (x = 0; x < arr.length; x++) {
        //Local variable to store the max value of each sub-array
        //Method `.reduce` for iterating through `arr[x]` and returning the highest value
        var maxVal = arr[x].reduce(function(previousVal, currentVal) {
            if (previousVal > currentVal) {
                return previousVal;
            } else return currentVal;
        });
        //Pushing `maxVal` into `maxArr` for each loop
        maxArr.push(maxVal);
    }
    //Returning `maxArr` with highest values from each sub-array
    return maxArr;
}

//Test the code
largestOfFour([[1, 2, 4, 5, 1, 3], [100, 104, 27, 18, 101, 26, 103, 500], [32, 35, 37, 39], [1000, 1001, 857, 1]]);