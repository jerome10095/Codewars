function sumAndMultiply(sum, multiply) {
    // Discriminant: b^2 - 4ac
    const discriminant = (sum * sum) - (4 * multiply);
    
 
    if (discriminant < 0) return null;
    
​
    const sqrt = Math.sqrt(discriminant);
    const x = (sum + sqrt) / 2;
    const y = (sum - sqrt) / 2;
    
    // Check if they are whole numbers (integers), if that is a requirement
    if (Number.isInteger(x) && Number.isInteger(y)) {
        return [y, x];
    }
    
    return null;
}
​
console.log(sumAndMultiply(6, 9));   // Output: [3, 3]
console.log(sumAndMultiply(200, 10000)); // Output: [100, 100] (Works past 100!)
console.log(sumAndMultiply(-5, 6));  // Output: [-3, -2] (Works with negatives!)
​