"use strict";
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
let magicianNames = ["Merlin", "Houdini", "David Copperfield", "Penn & Teller"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// calling the function to show magician names
show_magicians(magicianNames);
