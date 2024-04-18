"use strict";
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/
let guestList = ["zahida", "muhammad", "daniyal", "ali bhadur"];
exports.guestList = guestList;
// the Guest who is not attending the dinner.
let guestWhoCantMakeIt = "muhammad";
console.log(`${guestWhoCantMakeIt} can't make it to dinner`);
// new Gust to be invited at dinner
let newGuest = "hammad ali";
// now we must know the index of the guest who can't make it. we use indexOf()
let indexOfguestWhoCantMakeI = guestList.indexOf(guestWhoCantMakeIt);
// console.log(indexOfguestWhoCantMakeI)
if (indexOfguestWhoCantMakeI !== -1) {
    // remove the guest from the list using splice() method
    guestList[indexOfguestWhoCantMakeI] = newGuest;
}
// console.log("Updated guestlist : ",guestList);
// using for each loop and arrow function to print the invitation for every guest.
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I am so glad to inform you that you are invited to a special dinner event.`);
});
