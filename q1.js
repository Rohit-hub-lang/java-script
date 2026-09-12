// ============================================================
// CONDITIONAL STATEMENT QUESTIONS
// ============================================================

// Q1. Check if a number is positive, negative, or zero
// Hint: use if / else if / else
let num1 = -7;
if (num1 > 0) {
    console.log("Q1: Positive");
} else if (num1 < 0) {
    console.log("Q1: Negative");
} else {
    console.log("Q1: Zero");
}

// -------------------------------------------------------

// Q2. Find the largest of three numbers
let a = 10, b = 35, c = 22;
if (a >= b && a >= c) {
    console.log("Q2: Largest is", a);
} else if (b >= a && b >= c) {
    console.log("Q2: Largest is", b);
} else {
    console.log("Q2: Largest is", c);
}

// -------------------------------------------------------

// Q3. Grade calculator using if / else if / else
// 90+  → A
// 80+  → B
// 70+  → C
// 60+  → D
// below 60 → F
let marks = 74;
if (marks >= 90) {
    console.log("Q3: Grade A");
} else if (marks >= 80) {
    console.log("Q3: Grade B");
} else if (marks >= 70) {
    console.log("Q3: Grade C");
} else if (marks >= 60) {
    console.log("Q3: Grade D");
} else {
    console.log("Q3: Grade F");
}

// -------------------------------------------------------

// Q4. Check if a year is a leap year
// Rule: divisible by 4, but not 100, unless also divisible by 400
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Q4:", year, "is a Leap Year");
} else {
    console.log("Q4:", year, "is NOT a Leap Year");
}

// -------------------------------------------------------

// Q5. Day name using switch statement
let day = 3;   // 1 = Monday ... 7 = Sunday
switch (day) {
    case 1: console.log("Q5: Monday");   break;
    case 2: console.log("Q5: Tuesday");  break;
    case 3: console.log("Q5: Wednesday");break;
    case 4: console.log("Q5: Thursday"); break;
    case 5: console.log("Q5: Friday");   break;
    case 6: console.log("Q5: Saturday"); break;
    case 7: console.log("Q5: Sunday");   break;
    default: console.log("Q5: Invalid day");
}

// -------------------------------------------------------

// Q6. Simple calculator using switch
let x = 20, y = 4;
let operator = "/";   // change to +, -, *, / to test
let result;
switch (operator) {
    case "+": result = x + y; break;
    case "-": result = x - y; break;
    case "*": result = x * y; break;
    case "/": result = y !== 0 ? x / y : "Cannot divide by zero"; break;
    default:  result = "Unknown operator";
}
console.log("Q6:", x, operator, y, "=", result);

// -------------------------------------------------------

// Q7. FizzBuzz (classic interview question)
// If divisible by 3 → "Fizz"
// If divisible by 5 → "Buzz"
// If divisible by both → "FizzBuzz"
// Otherwise → the number itself
let n = 15;
if (n % 3 === 0 && n % 5 === 0) {
    console.log("Q7: FizzBuzz");
} else if (n % 3 === 0) {
    console.log("Q7: Fizz");
} else if (n % 5 === 0) {
    console.log("Q7: Buzz");
} else {
    console.log("Q7:", n);
}

// -------------------------------------------------------

// Q8. Ternary operator — check voting eligibility
let age = 17;
let eligibility = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log("Q8:", eligibility);

// -------------------------------------------------------

// Q9. Nested if — check if a number is between 1 and 100 AND even
let num2 = 46;
if (num2 >= 1 && num2 <= 100) {
    if (num2 % 2 === 0) {
        console.log("Q9:", num2, "is in range AND even");
    } else {
        console.log("Q9:", num2, "is in range but odd");
    }
} else {
    console.log("Q9:", num2, "is out of range");
}

// -------------------------------------------------------

// Q10. Ticket price based on age group using switch range trick
let personAge = 12;
let category;
if (personAge <= 5)       category = "Free";
else if (personAge <= 12) category = "Child  — ₹50";
else if (personAge <= 59) category = "Adult  — ₹150";
else                      category = "Senior — ₹80";
console.log("Q10: Ticket price:", category);

// ============================================================
