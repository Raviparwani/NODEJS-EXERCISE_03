"use strict";
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in
//  lowercase, uppercase, and titlecase.
//Example 1
console.log("\nExample1", "-".repeat(50));
let firstName = "ravi kumar";
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());
console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));
//example 2 for lowercase
console.log("\nExample2", "-".repeat(50));
let name0 = "Shahbaz ahmed";
let name2 = name0.toLowerCase();
console.log(name2);
//example 2 for uppercase
let name3 = "mukesh kumar";
let name4 = name3.toUpperCase();
console.log(name4);
//example 3 for titlecase
let name5 = "fayaz ahmed";
console.log(name5.charAt(0).toUpperCase() + name5.slice(1));