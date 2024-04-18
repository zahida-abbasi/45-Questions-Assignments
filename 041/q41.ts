/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/

/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

let magicianNames:string[]=["Merlin", "Houdini", "David Copperfield", "Penn & Teller"];

function show_magicians(magicians:string[]){
    for(const magician of magicians){
        console.log(magician);

    }

}
// calling the function to show magician names
show_magicians(magicianNames);