function binarySearch(arr, val) {
    let pl = 0;
    let pr = arr.length - 1;
    let pm = Math.floor((pl + pr) / 2);

    while (arr[pm] !== val && pl <= pr) {
        if (val > arr[pm]) pl = pm + 1;
        else pr = pm - 1;
        pm = Math.floor((pl + pr) / 2);
    }
    return arr[pm] === val ? pm : -1;
}




console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)) // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)) // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)) // -1