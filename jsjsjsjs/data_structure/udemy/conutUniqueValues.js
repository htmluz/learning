function countUniqueValues(arr) {
    let i = 0;
    if (arr.length == 0) return 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1
}

console.log(countUniqueValues([-2,-1,-1,0,1]))
console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([1,2,2,2,2,2,4,4,5,7,11]))