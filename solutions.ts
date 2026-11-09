const multiplyValue = (value: number, multiplier: number = 2 ) => {
    if(multiplier === 0) {
        return 0;
    }
    return value * multiplier;
}

console.log(multiplyValue(10)); // Output: 10
console.log(multiplyValue(10, 5)); // Output: 15
console.log(multiplyValue(7, 0)); // Output: 0
