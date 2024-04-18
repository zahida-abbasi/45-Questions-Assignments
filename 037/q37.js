"use strict";
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function makeShirt(size = "large", message = "I love TypeScript ") {
    console.log(`Size ${size}, Message ${message}`);
}
// calling the function with its default values 
makeShirt(); // Size large, Message I love TypeScript 
//Medium shirt with Default Message;
makeShirt("medium"); // Size medium, Message I love TypeScript
// Custom shirt with a different message and size 
makeShirt("small", "Welcome to my Website!"); // Size small, Message Welcome to my website
