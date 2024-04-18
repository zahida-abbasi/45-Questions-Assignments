/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/

/*
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/

// Creating objects representing information about countries
let bouquet = {
    name:"Spring Delight",
    price: 50,
    description:"Beautiful arrangement of spring flowers" 

}  
 // define an array of objects.
 let bouquets: Array<typeof bouquet>=[];
 // pushing multiple objects.

bouquets.push(bouquet);
console.log(bouquets)
bouquets.push({name:"summber bills",
price: 50,
description:"Summber flowers"
})
console.log(bouquets)
