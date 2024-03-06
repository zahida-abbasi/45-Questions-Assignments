"use strict";
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/
/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
let guestList = ["adnan", "muhammad", "daniyal", "ali bhadur"];
// guestList.forEach(myGuest=>{
//     console.log(`Hello ${myGuest} we found a bigger dinner table, so now more space is available` )
// })
//step 1 to send message to guest that we found a big space available.
for (let guest of guestList) {
    console.log(`Hello ${guest} we found a bigger dinner table, so now more space is available`);
}
// step 2: add new guest in begning of the array.
let newGuestAtBegning = "zahid";
guestList.unshift(newGuestAtBegning);
// console.log(guestList)
//step 3: add one guest to the middle of array.
let newGuestAtMiddle = "ishtiaque abbasi";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestAtMiddle);
// console.log(guestList)
//step 4: use append() to add guest at the end of your list
let newGuestAddAtEnd = "faheem ahmed";
guestList.push(newGuestAddAtEnd);
console.log(guestList);
//step 5: Print a new set of invitation messages, one for each person in your list.
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I am so glad to inform you that you are invited to a special dinner event.`);
});
