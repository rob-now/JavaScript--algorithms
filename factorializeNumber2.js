function factorialize(num) {
    //Check if passed value is less than 0
    if (num < 0) {
        return "Only positive integers and 0 allowed";
    }
    //Check if passed value is 0 and return 1
    if (num === 0) {
        return 1;
    }
    //Use recursion
    return num * factorialize(num-1);
}

//Pass the value to test code
factorialize(0);