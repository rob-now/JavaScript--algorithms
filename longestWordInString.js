function findLongestWord(str) {
    //Split string into array
    var array = str.split(" ");
    //Sort elements of array by their length from longest to shortest
    array.sort(function(a,b){
        return b.length-a.length;
    });
    //Return the length of the first element in the array
    return array[0].length;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");