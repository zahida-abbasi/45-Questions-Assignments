"use strict";
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
*/
function describe_city(city, country = "Unknown Country") {
    console.log(`${city} is in ${country}.`);
}
// calling the function for three different cities
describe_city("karachi", "Pakistan"); // calling the fucntion and passing argument for function parameters.
describe_city("New York"); // calling the function with default parametes
describe_city("Berlin", "Germany");
