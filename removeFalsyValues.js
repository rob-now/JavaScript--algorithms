function bouncer(arr) {
    //Filter which removes all falsy values in Java Script:
    //false, null, 0, "", undefined, NaN
    return arr.filter(Boolean);
}



bouncer([false, null, 0, NaN, undefined, "", true, 7, "string"]);