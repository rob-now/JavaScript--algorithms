function rot13(str) {
    //Variable to store decoded values
    var codesArr = [];
    //For loop to check `str`
    for (var x = 0; x < str.length; x++) {
        //Check if letter is in range `n-zN-Z`
        if (/[n-zN-Z]/.test(str[x])) {
            //Convert letter to char code (charCodeAt) and decrease it by 13
            //Then convert new char code to string (fromCharCode)
            //And finally push new string to 'codesArr`
            codesArr.push(String.fromCharCode(str[x].charCodeAt() - 13));
        }
        //Check if letter is in range `a-mA-M`
        else if (/[a-mA-m]/.test(str[x])) {
            //Convert letter to char code (charCodeAt) and increase it by 13
            //Then convert new char code to string (fromCharCode)
            //And finally push new string to 'codesArr`
            codesArr.push(String.fromCharCode(str[x].charCodeAt() + 13));
        }
        else
            //If there are other characters than `a-zA-Z` just push it to `codesArr`
            codesArr.push(str[x]);
    }
    //Join `codesArr` to one string
    return codesArr.join("");

}
//Test code
rot13("LBH QVQ VG!");