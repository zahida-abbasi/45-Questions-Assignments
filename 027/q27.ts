
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/

/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

// version 1
console.log("1st Version of code");
let alienColor:string = "green";

if(alienColor === "green"){
    console.log("Congratulations!  You just earn 5 points ");

}else if(alienColor === "yellow"){
    console.log("Congratulations! You just earn 10 points!");

}else if (alienColor === "red"){
    console.log("Congratulations! You just earn 15 points!");

}else {
    console.log("Unknown alien color");
}

//2nd version when align color is yellow

console.log("Second Version of code");
alienColor = "yellow";

if(alienColor === "green"){
    console.log("Congratulations!  You just earn 5 points ");

}else if(alienColor === "yellow"){
    console.log("Congratulations! You just earn 10 points!");

}else if (alienColor === "red"){
    console.log("Congratulations! You just earn 15 points!");

}else {
    console.log("Unknown alien color");
}


//3rd version when align color is red


console.log("Third Version of code");
alienColor = "red";

if(alienColor === "green"){
    console.log("Congratulations!  You just earn 5 points ");

}else if(alienColor === "yellow"){
    console.log("Congratulations! You just earn 10 points!");

}else if (alienColor === "red"){
    console.log("Congratulations! You just earn 15 points!");

}else {
    console.log("Unknown alien color");
}