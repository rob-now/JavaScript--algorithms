function chunkArrayInGroups(arr, size) {
    //Define variable (array) to store results
    var arrayGroups = [];
    //For loop to iterate through `arr` by `x + size`
    for (x = 0; x < arr.length; x += size) {
        //Slice `arr` from `x` to `x + size` range and then
        //push each grabbed array to `arrayGroups`
        arrayGroups.push(arr.slice(x, x + size));
    }

    return arrayGroups;

}
//Test code
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);