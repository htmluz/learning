function sameFrequency(int1, int2) {
    int1 = int1.toString();
    int2 = int2.toString();

    if (int1.length !== int2.length) return false;

    let obj = {};
    for (let i = 0; i < int1.length; i++) {
        let num = int1[i];
        obj[num] ? obj[num] += 1 : obj[num] = 1;
    }
    for (let i = 0; i < int2.length; i++) {
        let num = int2[i];
        if (!obj[num]) return false;
        else {
            obj[num] -= 1;
        }
    }
    return true;
}



console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false