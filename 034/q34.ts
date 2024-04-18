/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/

/*
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/

// Define the array pf favarite pizza
const favaritePizzas:string[] =["Pepperoni","Margherita","BBQ Chicken"];

//Print the name of each pizza using a for loop
console.log("My favorite pizzas are:");
for(let i=0; i<favaritePizzas.length;i++){
    console.log(favaritePizzas[i])

}

// Print a sentece for each pizza
console.log("\n I like these Pizzas: ");
for(let i=0; i<favaritePizzas.length;i++){
    console.log(`I like ${favaritePizzas[i]} pizza`)

}