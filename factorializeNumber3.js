function factorialize(num) {
    for (x = 1;num >= 1; num--) {
        x = num * x;
    }
    return x;
}

factorialize(0);