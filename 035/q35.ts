/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/

/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/

// List of animals
const animals: string[] = ["Dog", "Cat", "Cow"];

// Printing the the names of each animal using a for of loop

console.log("List of animals :");
for(const animal of animals){
    console.log(animal);

}

// print a statement about each animal
console.log("\n Statements about each elements");
for(const animal of animals){
    if (animal === "Dog"){
    console.log(`A ${animal} is a great pet, it is called human friend;`)
    }else if(animal === "Cat"){
        console.log(`A ${animal} is Good companion at home;`) 

    }else if(animal === "Cow") {
        console.log(`A ${animal} is adorable pet which gives us milk;`)

    }
}

//  Print a statement about what these animals have in common

console.log("\n What these animals have common: ");
console.log("Any of these animals would make a great pet");
