// 7 Primitive Data Types
// 5 Basic Data Types
// const mystring = "Evan";       //string
// const cost = null;             // number
// const carBroken = true;        // boolean

// null // nothing is here
// undefined // never set something to undefined!

// 2 Advanced Types
// BigInt - very very large numbers
// Symbol - tool for making libraries and frameworks

// Conditional - Flow of Control
//

// var shouldConsoleLog = true;

// if (true) {
//     console.log("It's true");
// }



// var costOfApple = 1;
// var discount = .5;
// var customerHasDiscount = false;
// var saleDay = true;

// if (customerHasDiscount) {
//     costOfApple = costOfApple - discount;
// } else if (saleDay) {
//     costOfApple = costOfApple - discount;
// } else {
//     console.log("Sorry, no discount for you!");
// }

// console.log("The cost of an an apple is $" + costOfApple);

// var costOfAnAvacado = 4;

// if (costOfApple < costOfAnAvacado) {
//     console.log("The apple costs less");
// } else if (costOfAnAvacado < costOfApple) {
//     console.log("The avacodo costs less");
// } 



// const myBoolean = 2 === "2";
// const isInstructor = true;
// console.log(myBoolean || !isInstructor);


// var myName = "Evan"; // Old, buggy implementation
// let myLastNamePart1 = "Scribner";  // Replaces var
// const myLastNamePart2 = "MacLean"; // More constrained and safer

// // for loops are best when you know beforehand how many times you want to loop
// // while are better when you don't

// for (
//   let i = 0;   // something to do before we loop and only the first time
//   i <= 10;      // something to do after we loop
//   i++          // when to stop -- conditional -- loop until this is false -- NO SEMICOLON
// ) {
//   console.log("The current value of 'i' is " + i);  // the thing we do in the loop
// }


// let i = 0;
// while (i <= 10) {
//   i++;
//   console.log("The current value of i from the while loop is " + i);
// }

// const loggedIn = false;
// const logInAttempts = 0;
// const maxLogInAttempts = 3;

// while (!loggedIn) {
//     if (logInAttempts >+ maxLogInAttempts) {
//         alert(
//             "Incorrect username or password. Too many attempts, you can't log in."
//         );
//         break;
//     }
// }
// var username = prompt("Username");
// var password = prompt("Password");
// logInAttempts++;
// if (username === "Evan" && password === "12345") {
//     alert("Welcome back, " + username);
//     loggedIn = true;
// } else {
//     alert("Incorrect username and password.");
// }

// Arrays!  Composite data structures, collection data types, data sctructures
// An array is an ordered list

const myPets = ["Cali", "Bdubs", "Bink", "Dior"];
const receipts = [100, 19, 26];

console.log(myPets);




