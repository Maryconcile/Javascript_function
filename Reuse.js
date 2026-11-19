function calculateAverage(mark1, mark2, mark3) {

    let total = mark1 + mark2 + mark3;

    let average = total / 3;

    return average;
}

// Student 1
let maryAverage = calculateAverage(80, 70, 90);

// Student 2
let johnAverage = calculateAverage(60, 75, 85);

// Student 3
let peterAverage = calculateAverage(90, 95, 85);

// Display results
console.log("Mary's average: " + maryAverage);
console.log("John's average: " + johnAverage);
console.log("Peter's average: " + peterAverage);