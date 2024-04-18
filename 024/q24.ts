/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/


/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

// Test for Quality and inequality with strings
const string1:string = "Hello";
const string2:string = "hello";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true

// Test using the lower case function
const text1:string = "Hello World";
const text2:string = "hello world";
console.log(text1.toLowerCase() === text2); // True


/* Numberal test involving equality and inequality, greater than and less than, greater than or equal to, and less thatn or equal to
*/ 

const num1:number = 10;
const num2:number =5;

console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // true


/* Test using "& |and" and "|" or operator */
const x: number =5;
const y: number =10;
const z: number =15;

console.log(x<y && y<z); // both conditions are true
console.log(x<y || y >z); // ture atleast one condition
console.log(x>y && y>z); // both conditions are false
console.log(x>y || y > z); // both conditions are false

// Test weather an item is in an array
const fruits:string[] =["apple","banana", "orange","grapes"];
console.log(fruits.includes("banana")) // true
console.log(fruits.includes("kiwi")) // False

// Test weather an item is not in an array
const colors: string[]=["Red","Green","Blue","Yellow"];
console.log(!colors.includes("purpule")); //True
console.log(!colors.includes("Green")); //False












