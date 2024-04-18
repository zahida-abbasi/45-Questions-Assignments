"use strict";
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
// Array of Magician Names
let magicianNames = ["Merlin", "Houdini", "David Copperfield", "Penn & Teller"];
// Function to display magician names
function show_magicians(magicians, title) {
    console.log(`${title}:`);
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Function to modify the array by adding "The Great " to each magician's name
function make_great(magicians) {
    return magicians.map(magician => `The Great ${magician}`);
}
// Modify the array to add "The Great " to each magician's name
const greatMagicianNames = make_great(magicianNames);
// Calling the function to show original magician names
show_magicians(magicianNames, "Original Magician Names");
// Calling the function to show modified magician names
show_magicians(greatMagicianNames, "Magician Names with 'The Great'");
