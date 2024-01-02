function insertionsort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        for (let j = i - 1; j > -1 && arr[j] > curr; j--) {

        }
    }
    return arr;
}

const swap = (arr, idx1, idx2) => 
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

console.log(insertionsort([4,1,87,32,12,5,321,21]))