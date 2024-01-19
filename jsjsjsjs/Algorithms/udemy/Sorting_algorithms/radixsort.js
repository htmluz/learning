function getDigit(int, n) {
    return Math.floor(Math.abs(int) / Math.pow(10, n)) % 10;
}   //.abs se negativo              aqui eu faço 10 elevado a tal potência pra pegar aquela posição baseado em centenas e tals

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
} 

function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

function radixSort(arr) {
    let most = mostDigits(arr);
    for (let k = 0; k < most; k++) {
        let buckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < arr.length; i++) {
            buckets[getDigit(arr[i], k)].push(arr[i]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

console.log(radixSort([2,12,4,213231,1,5]))