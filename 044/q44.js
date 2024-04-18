"use strict";
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/
function orderSandwich(...items) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich!");
    }
    else {
        const sandwichSummary = `You ordered a sandwich with: ${items.join(', ')}.`;
        console.log(sandwichSummary);
    }
}
// Example function calls with different numbers of arguments
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss");
orderSandwich("Peanut Butter", "Jelly");
