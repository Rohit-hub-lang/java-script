
// ============================================================
// STRINGS IN JAVASCRIPT
// ============================================================

// 1. String Declaration
let single = 'Hello';
let double = "World";
let template = `Hello, World!`;         // template literal

// 2. Common String Methods
let str = "JavaScript is awesome!";

console.log(str.length);               // 22 — string length
console.log(str.toUpperCase());        // JAVASCRIPT IS AWESOME!
console.log(str.toLowerCase());        // javascript is awesome!
console.log(str.includes("awesome"));  // true
console.log(str.indexOf("is"));        // 11 — first position
console.log(str.slice(0, 10));         // "JavaScript"
console.log(str.replace("awesome", "powerful")); // JavaScript is powerful!
console.log(str.trim());               // removes leading/trailing spaces
console.log(str.split(" "));           // ["JavaScript", "is", "awesome!"]

// 3. Template Literals
let name = "Alice";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

// ============================================================
// LOOPS IN JAVASCRIPT
// ============================================================

// 4. for loop — fixed number of iterations
console.log("\n--- for loop ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

// 5. while loop — runs as long as condition is true
console.log("\n--- while loop ---");
let num = 1;
while (num <= 5) {
    console.log(`While: ${num}`);
    num++;
}

// 6. do...while loop — runs at least once
console.log("\n--- do...while loop ---");
let x = 1;
do {
    console.log(`Do-While: ${x}`);
    x++;
} while (x <= 5);

// 7. for...of loop — iterate over arrays/strings
console.log("\n--- for...of loop ---");
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

// for...of on a string (iterates character by character)
for (let char of "Hello") {
    console.log(`Char: ${char}`);
}

// 8. for...in loop — iterate over object keys
console.log("\n--- for...in loop ---");
let person = { name: "Bob", age: 30, city: "Delhi" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 9. Array methods that loop internally
console.log("\n--- forEach / map / filter ---");
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log(`forEach: ${n}`));

let doubled = numbers.map(n => n * 2);
console.log("map (doubled):", doubled);       // [2, 4, 6, 8, 10]

let evens = numbers.filter(n => n % 2 === 0);
console.log("filter (evens):", evens);        // [2, 4]

// 10. break and continue
console.log("\n--- break & continue ---");
for (let i = 1; i <= 10; i++) {
    if (i === 4) continue;   // skip 4
    if (i === 7) break;      // stop at 7
    console.log(`i = ${i}`);
}

// ============================================================
// ARRAYS IN JAVASCRIPT
// ============================================================

// 1. Array Declaration
let emptyArr = [];                          // empty array
let colors = ["red", "green", "blue"];      // array of strings
let mixed = [1, "hello", true, null];       // mixed types
const scores = [85, 92, 78, 95, 60];        // array of numbers

// 2. Accessing Elements (zero-indexed)
console.log("\n--- Accessing Elements ---");
console.log(colors[0]);          // "red"
console.log(colors[2]);          // "blue"
console.log(colors.length);      // 3
console.log(colors[colors.length - 1]); // last element: "blue"

// 3. Modifying Arrays
console.log("\n--- Modifying Arrays ---");
colors.push("yellow");           // add to end
console.log(colors);             // ["red", "green", "blue", "yellow"]

colors.pop();                    // remove from end
console.log(colors);             // ["red", "green", "blue"]

colors.unshift("black");         // add to beginning
console.log(colors);             // ["black", "red", "green", "blue"]

colors.shift();                  // remove from beginning
console.log(colors);             // ["red", "green", "blue"]

colors[1] = "purple";            // update by index
console.log(colors);             // ["red", "purple", "blue"]

// 4. Common Array Methods
console.log("\n--- Common Array Methods ---");

// indexOf / includes
let nums = [10, 20, 30, 40, 50];
console.log(nums.indexOf(30));        // 2
console.log(nums.includes(99));       // false

// slice — returns a portion (does NOT mutate original)
let sliced = nums.slice(1, 4);
console.log("slice(1,4):", sliced);   // [20, 30, 40]

// splice — removes/replaces elements (MUTATES original)
let letters = ["a", "b", "c", "d", "e"];
let removed = letters.splice(1, 2);  // remove 2 items starting at index 1
console.log("removed:", removed);    // ["b", "c"]
console.log("letters after splice:", letters); // ["a", "d", "e"]

// concat — merge arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2);
console.log("concat:", merged);      // [1, 2, 3, 4, 5, 6]

// join — array to string
let words = ["JavaScript", "is", "fun"];
console.log(words.join(" "));        // "JavaScript is fun"
console.log(words.join("-"));        // "JavaScript-is-fun"

// reverse — reverses in place
let rev = [1, 2, 3, 4, 5];
rev.reverse();
console.log("reverse:", rev);        // [5, 4, 3, 2, 1]

// sort — sorts alphabetically by default
let fruits2 = ["Banana", "Apple", "Cherry", "Mango"];
fruits2.sort();
console.log("sort:", fruits2);       // ["Apple", "Banana", "Cherry", "Mango"]

// sort numbers (need a comparator)
let unsorted = [40, 1, 5, 200, 30];
unsorted.sort((a, b) => a - b);      // ascending
console.log("sorted asc:", unsorted); // [1, 5, 30, 40, 200]

// 5. Higher-Order Array Methods
console.log("\n--- Higher-Order Array Methods ---");

// map — transform each element, returns new array
let prices = [100, 200, 300];
let discounted = prices.map(p => p * 0.9);
console.log("map (10% off):", discounted);  // [90, 180, 270]

// filter — keep elements that pass a test
let ages = [12, 18, 25, 15, 30];
let adults = ages.filter(a => a >= 18);
console.log("filter (adults):", adults);    // [18, 25, 30]

// reduce — accumulate to a single value
let total = scores.reduce((acc, val) => acc + val, 0);
console.log("reduce (total):", total);      // 410

// find — first element that matches
let found = scores.find(s => s > 90);
console.log("find (>90):", found);          // 92

// findIndex — index of first match
let idx = scores.findIndex(s => s > 90);
console.log("findIndex (>90):", idx);       // 1

// some — true if at least one matches
console.log("some (>90):", scores.some(s => s > 90));   // true

// every — true if all match
console.log("every (>50):", scores.every(s => s > 50)); // false

// flat — flatten nested arrays
let nested = [1, [2, 3], [4, [5, 6]]];
console.log("flat(1):", nested.flat());     // [1, 2, 3, 4, [5, 6]]
console.log("flat(2):", nested.flat(2));    // [1, 2, 3, 4, 5, 6]

// 6. Spread Operator with Arrays
console.log("\n--- Spread Operator ---");
let a = [1, 2, 3];
let b = [4, 5, 6];
let combined = [...a, ...b];
console.log("spread combined:", combined);  // [1, 2, 3, 4, 5, 6]

let copy = [...a];                          // shallow copy
copy.push(99);
console.log("original a:", a);             // [1, 2, 3] — unchanged
console.log("copy:", copy);                // [1, 2, 3, 99]

// 7. Destructuring Arrays
console.log("\n--- Array Destructuring ---");
let [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log("first:", first);    // 10
console.log("second:", second);  // 20
console.log("rest:", rest);      // [30, 40, 50]

// swap variables using destructuring
let p = 1, q = 2;
[p, q] = [q, p];
console.log(`p=${p}, q=${q}`);   // p=2, q=1

// 8. 2D Arrays (Array of Arrays)
console.log("\n--- 2D Arrays ---");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]);       // 6  (row 1, col 2)

// iterate over 2D array
for (let row of matrix) {
    console.log(row.join(" | "));
}

// ============================================================

const student = {