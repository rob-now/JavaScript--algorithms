function factorialize(num) {
    //Check if passed number is positive or 0
    if (num < 0) {
        return "Only positive integers and 0 allowed";
    }
    //Create array from 1 to n (n = num)
    var initArray = [];
    for (var x = 1; x <= num; x++) {
        initArray.push(x);
    }
    //Reduce array to one value - n!
    var product = initArray.reduce(function (previousVal, currentVal) {
        return previousVal * currentVal;
    }, 1);
    return product;
}

//Pass the value to test code
factorialize(0);