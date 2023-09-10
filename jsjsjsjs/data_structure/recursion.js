const factorial = (n) => {
    if (n === 1) return 1; // Base Case

    return n * factorial(n - 1);
}

console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(20));
console.log(factorial(100));

// Time: O(n)
// Space: O(n)