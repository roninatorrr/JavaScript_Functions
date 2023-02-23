console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(10);
printOdds(100);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}! You can drive.`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16) {
        console.log(belowSixteen)
    } else {
        console.log(aboveSixteen)
    }
}

checkAge("Roni", 31)
checkAge("Nico", 5)
checkAge("Ashley", 16)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function findQuadrant(x, y){
    if (x > 0 && y > 0){
        return "Q1";
    } else if (x < 0 && y > 0) {
        return "Q2";
    } else if (x < 0 && y < 0) {
        return "Q3";
    } else if (x > 0 && y < 0) {
        return "Q4";
    } else if (x == 0 && y != 0) {
        return "X axis";
    } else if (x != 0 && y == 0) {
        return "Y axis";
    } else {
        return "Origin";
    }
}

console.log(findQuadrant(1, 1));
console.log(findQuadrant(-2, 1));
console.log(findQuadrant(-1, -3));
console.log(findQuadrant(2, -1));
console.log(findQuadrant(0, 4));
console.log(findQuadrant(-4, 0));
console.log(findQuadrant(0, 0));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function validTriangle(e, f, g) {
    return e + f > g && e + g > f && f + g > e;
}

function checkTriangle(e, f, g) {
    let isValid = validTriangle(e, f, g); 
    if (isValid) {
        if (e == f && f == g) {
            return "Equilateral";
        } else if (e == f || f == g || e == g) {
            return "Isosceles";
        } else {
            return "Scalene";
        }
    } else {
        return "Not a valid triangle.";
    }
}

console.log(checkTriangle(5, 4, 3));
console.log(checkTriangle(8, 3, 2));
console.log(checkTriangle(2, 1, 2));
console.log(checkTriangle(1, 1, 2));
console.log(checkTriangle(9, 9, 9));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

//15 days used, 15 days remaining
//Average daily use: 3.333 GB/day
//You are EXCEEDING your average daily use (3.73 GB/day),
//continuing this high usage, you'll exceed your data plan by
//11.9 GB.
//To stay below your data plan, use no more than 2.93 GB/day.

function checkUsage(planLimit, day, usage) {
    let periodLength = 30;
    let userAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let projectedUse = remainingDays * userAvg;
    let remainingData = planLimit - usage;
    let statusMsg;
    let usageMsg;
    
    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average daily use: ${userAvg} GB/day`);
    console.log(`Average projected use is ${projectedAvg} GB/day.`);

    if (userAvg > projectedAvg) {
        statusMsg = "OVER";
    } else if (userAvg < projectedAvg) {
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT";
    }

    if (userAvg > projectedAvg) {
        usageMsg = "exceed";
    } else if (userAvg < projectedAvg) {
        usageMsg = "be within";
    } else {
        usageMsg = "be on track with";
    }

    console.log(`You are ${statusMsg} your average daily use (${userAvg} GB/day),
    by continuing this usage, you'll ${usageMsg} your data plan by ${planLimit - (usage + projectedUse)} GB.`);

    console.log(`To stay below your data plan, use no more than ${remainingData / remainingDays} GB/day.`);

}

checkUsage(50, 12, 25);
