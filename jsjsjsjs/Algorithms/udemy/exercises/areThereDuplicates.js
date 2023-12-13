function areThereDuplicates(...arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];
        obj[char] ? obj[char] += 1 : obj[char] = 1;
    }
    for (let key in obj) {
        if (obj[key] >= 2) return true;
    }
    return false;
}




console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 