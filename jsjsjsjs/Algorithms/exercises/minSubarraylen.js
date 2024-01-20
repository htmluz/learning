function minSubArrayLen(arr, num) {
    let total = 0; //usado pra soma dos elementos da array 
    let start = 0; //aponta sempre pro inicio da subarray
    let end = 0; //aponta sempre pro final da subarray
    let minLen = Infinity; //usado pra rastrear o comprimento min da subarray

    while (start < arr.length) {
        if (total < num && end < arr.length) { // verifica se a soma total eh menor que num e se end ainda nao ta no final
            total += arr[end]; //adiciona o que ta no index end
            end++; //move end 1 pra frente
        } else if (total >= num) { //se total for maior ou igual a num
            minLen = Math.min(minLen, end - start); //atualiza o minLen pro menor entre minLen e o comprimento da subarray
            total -= arr[start]; //tira a soma do comeco da subarray
            start++; //joga o start pra frente
        } else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen; //retorna o menor comprimento da subarray se for menor que infinito
}




console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0
