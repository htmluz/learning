function maxSubarraySum(arr, num) {
    let maxSum = 0; 
    let tempSum = 0;
    if (arr.length < num) return null; 
    for (let i = 0; i < num; i++) { //faco um loop da primeira soma equivalente ao num
        maxSum += arr[i];
    } 
    tempSum = maxSum; //salvo a soma em tempsum
    for (let i = num; i < arr.length; i++) { //faco o for comecando no index de num
        tempSum = tempSum - arr[i - num] + arr[i]; //faco o esquema de diminuir o primeiro index e add o segundo
        maxSum = Math.max(maxSum, tempSum); //comparo os dois
    }
    return maxSum;
}

console.log(maxSubarraySum([1,2,4,6,1,3,2,1,2,6,8,4,1], 3))