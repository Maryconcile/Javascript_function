function calculateAverage(mark1, mark2, mark3) {
    let total = mark1 + mark2 + mark3;
    return total / 3;
}

function checkResult(average) {
    if (average >= 60) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// Mary
let maryAverage = calculateAverage(80, 70, 90);
let maryResult = checkResult(maryAverage);

// John
let johnAverage = calculateAverage(40, 50, 45);
let johnResult = checkResult(johnAverage);

// Display results
console.log("Mary: " + maryAverage + " - " + maryResult);
console.log("John: " + johnAverage + " - " + johnResult);