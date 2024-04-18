/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/

/*Q:03: Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, 
and titlecase.*/

 //step 01 to show in lower case
let personName:string="zahida abbasi";

let lowerCaseName:string=personName.toLowerCase();
// print lower case in console
console.log("to lower case",lowerCaseName);

//step 02 to show in upper case
let upperCaseName:string = personName.toUpperCase();
console.log("To Upper Case",upperCaseName);

// step 03 to title case
let words:string[]=personName.split(" ");
let titleCaseName:string = " ";
for(let i=0; i<words.length; i++){
    titleCaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+ " "

};
console.log("To Title Case", titleCaseName);

