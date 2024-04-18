/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/

/*
Hello Admin: Make an array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/

const usderNames: string[] = [
  "admin",
  "daniyal",
  "zahida",
  "fida",
  "javed",
  "abdur rehman",
];

function greetUser(): void {
  for (const i in usderNames) {
    if (usderNames[i].toLowerCase() === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${usderNames[i]}, thank you for logging in again`);
    }
  }
}

greetUser();