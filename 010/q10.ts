
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/


/*Adding Comments: Choose two of the programs you’ve written, and add at 
least one comment to each. If you don’t have anything specific to write because
 your programs are too simple at this point, just add your name and the current 
 date at the top of each program file. Then write one sentence describing what the 
 program does.
 */


//step 01 to show in lower case
let personName:string="afaque ahmed abbasi";

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

// second program

let userName:string = "afaque ahmed abbasi";

console.log(userName);