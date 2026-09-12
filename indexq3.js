// let admin =
// true;
// let john = false;
// if(admin||john) {
//     console.log("Both are true");
// }
// else{
//     console.log("At least one is false");
// }


// let temperature = 34;
// if(!temperature>30){
//     console.log("It's a hot day");

// }
// else if(temperature>20){

//     console.log("It's a nice day");

//     }


// let grade = prompt("Enter your grade: ");
// if(grade>=90){
//     console.log("You got an A!");
// }
// else if(grade>=80){
//     console.log("You got a B!");
// }
// else{
//     console.log("You need to work harder.");
// }


// let count = 23;
// if(count-- ===23){
//     console.log("Matched");
// }
// else{
//     console.log("Not matched");
// }

// function getgrade(score) {
//     if (score>=90&& score<=100) return"A";
//     else if (score>=80&& score<=89) return"B";
//     else if  (score>=70&& score<=79) return"C";
//     else if (score>=60&& score<=69) return "D";
//     else if (score>=0&& score<=59) return "Fail";
//     else return "Invalid score";
// }
// console.log(getgrade(85));

//rock .paper scissors game
// function playgames(user, computer) {
//     if (user === computer) return "It's a tie!";
//     if (user === "rock" && computer === "scissors") return "You win!";
//     if (user === "paper" && computer === "rock") return "You win!";
//     if (user === "scissors" && computer === "paper") return "You win!";
//     return "Computer wins!";
// }

// console.log(playgames("rock", "scissors"));

// switch statement
// let x = 2;
// switch (x) {
//     case 1:
//         console.log("x is 1");
//         break;
//     case 2:
//         console.log("x is 2");
//         break;
//     default:
// //         console.log("x is neither 1 nor 2");
// // }


// let day = 3; // 1 = Monday, 2 = Tuesday, ..., 7 = Sunday
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//         case 4:
//         console.log("Thursday");
//         break;
//         case 5:
//         console.log("Friday");
//         break;
//         case 6:
//         console.log("Saturday");
//         break;
//         default:
//         console.log("Sunday");
// }   



// calculator using switch statement
// let operators = ["+", "-", "*", "/", "%"];
// let num1 = prompt("Enter first number: ");
// let num2 = prompt("Enter second number: ");
// let operator = prompt("Enter an operator (+, -, *, /, %): ");
// switch (operator) {
//     case "+":
//         console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
//         break;
//     case "-":
//         console.log(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`);
//         break;
//     case "*":
//         console.log(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`);
//         break;
//     case "/":
//         console.log(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`);
//         break;
//     case "%":
//         console.log(`${num1} % ${num2} = ${Number(num1) % Number(num2)}`);
//         break;
//     default:
//         console.log("Invalid operator. Please use one of the following: +, -, *, /, %");
// }

// function getGrade(a) {
// if (a>=90 && a<=100) return "A";
// else if (a>=80 && a<=89) return "B";
// else if (a>=70 && a<=79) return "C"; 
// else if (a>=60 && a<=69) return "D";
// else if (a>=0 && a<=59) return "Fail";
// else return "Invalid score";
// }

// console.log(getGrade(85));

// function leapYear(year) {
//     if (year%4===0 && year%100!==0 || year%400===0) return "Leap year";
//     else return "Not a leap year";
// }

// console.log(leapyear(2020));

// let username = prompt("Enter your username: ");
// let password = prompt("Enter your password: ");
// if (username === "admin" && password === "password123") {
//     console.log("login is suceesful");
// }

// else{
//     console.log("login is failed");
// }



// function login(username, password) {
//     if(username === "admin" && password === "password123") {
//         return "Login successful";
//     }
//     else{
//         return "Login failed";
//     }
// }

// console.log(login("admin", "password123")); // Login successful
// console.log(login("user", "password"));


// function operators(a, b, operator) {
//     switch (operator) {
//         case"+":
//             return a + b;
//             break;
//             case"-":
//             return a - b;
//             break; 
//             case"*":
//             return a * b;
//             break;
//             case"/":
//             return a / b;
//             break;
//             case"%":
//             return a % b;
//             break;
//             default:
//             return "Invalid operator";
//     }

//     console.log(operators(10, 67, "*")); 
    

// function signals(color){
//     if (color === "red") 
//         return "Stop";
//     else if (color === "yellow")
//         return "Get ready"; 
//     else if (color === "green") 
//         return "Go";
//     else 
//         return "Invalid color";

// }
// console.log(signals("red")); 

// let menu = prompt("Enter your choice: 1. Pizza, 2. Burger, 3. Pasta");
// switch (menu) {
//     case "1":
//         console.log("You have selected Pizza");
//         break;
//     case "2":
//         console.log("You have selected Burger");
//         break;
//     case "3":
//         console.log("You have selected Pasta");
//         break;
//     default:
//         console.log("Invalid choice");
// }
   

//only return function pe use hotaa hai

// function menu(choice) {
//     switch (choice) {
//         case "1":
//             return "You have selected Pizza";
//         break;
//         case "2":
//             return "You have selected Burger";
//         break;
//         case "3":
//             return "You have selected Pasta";
//         break;
//         default:
//             return "Invalid choice";
//     }

//     console.log(menu("3")); // You have selected Pizza
    
// //for loop
// //400-1

// for(let i = 400; i>=1; i--){
//     console.log(i);
// }

// function signal(color) {
//     switch(color) {
//         case "red":
//             return "Stop";  
//         case "yellow":
//             return "Get ready";
//         case "green":
//             return "Go";
//     }

// }
//  console.log(signal("red")); // Stop


//print 1 to 10 using for loop
for(let i =1; i<11; i++){
    console.log(i);
}

//print number 10 to 1 using for  while loop

let i = 10;
while(i>=1){
    console.log(i);
    i--;
}
// print number 10 to 1 using for loop
for(let i=10; i>0; i--){
    console.log(i);
}

//print  even number from 1 to 20 using a for loop
for(i=1; i<=20; i++){
    if(i%2===0){
        console.log(i); 
    }
    }

//print odd number from 1 to 20 using a while loop
 i=1;
 while(i<=20){
    if(i%2!==0){// if {i%2===1} bhi likh sakte hai
        console.log(i);
    }
    i++;
 }

//print number divisible of 5 from 5 to 100 using a for loop

 for(let i = 5; i<=101; i++){
    if(i%5===0){
        console.log(i);
    }
 }

 //print multiple of 5 from 5 to 100 using a for loop
 for(let i = 1; i<=100; i++){
    console.log(`5*${i}=${i*5}`,i*5);
 }

 //print sum of numbers from 1 to 100 using a for loop

 sum=0;
 for (let i=1; i<=100; i++){
    sum = sum+i;
 }
  console.log(sum)//5050
  
 
