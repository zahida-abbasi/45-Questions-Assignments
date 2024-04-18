/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/


/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

let placesToVisit: string[] = ["Germany", "Paris", "New York", "Luxumberg", "Sydney"];

// Print original order
console.log("Original Order:", placesToVisit);

// Print alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Show the array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);

// Print reverse alphabetical order without changing the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Show the array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

// Reverse the order again to return to the original order
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);

// Sort to change the array to reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
