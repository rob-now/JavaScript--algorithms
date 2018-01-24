function confirmEnding(str, target) {
    var result = str.substring(str.length - target.length);
    return result === target;
}

confirmEnding("Bastian", "an");