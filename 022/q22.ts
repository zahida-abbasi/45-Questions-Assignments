/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/

/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/

// Function to create fruit objects
function createFruit(name:string, color:string, taste:string){
    return{
        name,
        color,
        taste,
    };
}

// Create array of fruits
const fruits = [
    createFruit("apple","Red", "Sweet"),
    createFruit("Bannana","yellow", "Sweet"),
    createFruit("Orange","Orange", "Citrusy"),
    createFruit("Grapes","Purpule/Green", "Sweet"),
    createFruit("Strawberry","Red", "Sweet"),

];

// Access an invalid Index 
const invalidIndex =10; // There are only five element in array so it will cause an error.
console.log(`Fruit at Index ${invalidIndex}:`,fruits[invalidIndex]);

// Print the fruits 
fruits.forEach((fruit)=>{
    console.log(`Name: ${fruit.name} Color ${fruit.color} Taste ${fruit.color}`);


});