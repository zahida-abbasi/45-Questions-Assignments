/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/

/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/
//Exercise 26: Alien Colors #3 - Run both versions of the
// by Afaque Ahmed Abbasi

let alienColor:string = "green";
if(alienColor === "green"){
    console.log("Congratulations! You just earned 5 points for shooting the alien")
}else{
    console.log("Congratulations! You just earned 10 points for shooting the alien")
}


// version 2 ( runs the else block)
console.log("2nd version of code where else is execute")
alienColor = "yellow";

if(alienColor === "green"){
    console.log("Congratulations! You just earned 5 points for shooting the alien")
}else{
    console.log("Congratulations! You just earned 10 points for shooting the alien")
}

