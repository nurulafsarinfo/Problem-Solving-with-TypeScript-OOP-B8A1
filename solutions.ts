const multiplyValue = (value: number, multiplier: number = 2 ) => {
    if(multiplier === 0) {
        return 0;
    }
    return value * multiplier;
}

console.log(multiplyValue(10)); // Output: 20
console.log(multiplyValue(10, 5)); // Output: 50
console.log(multiplyValue(7, 0)); // Output: 0



const processInput = (input: string | number | boolean) : string | number => {
    if(typeof input === "string") {
        const processedString = input.trim().toLowerCase();
        return processedString;
    }
    else if (typeof input === "number") {
        return input * 10
    }
    else {
        return input ? "Active" : "Inactive";
    }
}

console.log(processInput("Bangladesh  "))
console.log(processInput(5))
console.log(processInput(false))





type Coordinate  = readonly [
    latitude: number,
    longitude: number,
    locationName: string,
]

const formatCoordinate = (data: Coordinate) : string => {
    return(
        `Location: ${data[2]} (${data[0]}, ${data[1]})`
    )
}

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]))
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]))
