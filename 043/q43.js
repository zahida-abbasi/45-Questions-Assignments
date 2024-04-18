"use strict";
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
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
