"use strict";
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d
like to invite to dinner. Then use your list to print a message to each person,
 inviting them to dinner.
*/
let guestList = ["adnan", 'muhammad', "daniyal", "ali bhadur"];
// using for each loop and arrow function to print the invitation for every guest.
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I am so glad to inform you that you are invited to a special dinner event.`);
});
