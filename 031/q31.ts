/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/


/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

// Non empty array case

let userName:string[] = ["admin","afqaue","daniyal","fida","abdur Rehman","sahil"];

//function case
function grettingUsers(usernames:string[]):void{
    if (usernames.length===0 ){
        console.log("we need to find some users!");
        return;
    }
    for(const username of usernames){
        if(username.toLowerCase()=== "admin"){
            console.log("Hello admin, would you like to see a status report?")
        }else{
            console.log(`Hello ${username}, thank you for logging in againl.`)
        }

    }

}

// to make array empty we just assign an empty array to userName.
grettingUsers(userName);

userName = [];

console.log(`\n\nfor non empty user \n`);
grettingUsers(userName);

