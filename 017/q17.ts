/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/

/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

let guestList: string[] = [
    'zahida', 'adnan', 'ishtiaque ', 'muhammad', 'daniyal', 'ali bhadur', 'faheem ahmed'
  ];
  
  // Print initial message
  console.log(`We can invite only two people for dinner.`);
  
  // Remove guests until only two remain
  while (guestList.length > 2) {
   let removedGuest = guestList.pop();
    if (removedGuest) {
      console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
    }
  }
  
  // Print invitation for the remaining two guests
  guestList.forEach((remainingGuest) => {
    console.log(`Dear ${remainingGuest}, you're still invited to dinner.`);
  });
  
  // Remove the last two names to make the list empty
  guestList.pop();
  guestList.pop();
  
  // Print the empty list
  console.log(`Guest list after the dinner: `,guestList);
  


