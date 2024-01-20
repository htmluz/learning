function maxSubarraySum(arr, sum) {
    if (sum > arr.length) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < sum; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = sum; i < arr.length; i++) {
        tempSum = tempSum - arr[i - sum] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}




console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null
