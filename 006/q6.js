"use strict";
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
Stripping Names: Store a person’s name, and include some
whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n",
at least once. Print the name once, so the whitespace around the
name is displayed. Then print the name after striping the white
spaces.
*/
let personName = "\t afaque ahmed abbasi \n";
console.log("Name with white space", personName);
let strippedName = personName.trim();
console.log("stripped name:", strippedName);
