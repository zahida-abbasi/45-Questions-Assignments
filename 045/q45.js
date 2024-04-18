"use strict";
/*Zahida
Governor Initiative IT program Q1: Assignments
Roll No: 00216014
*/
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
// Example function call with additional details
const myCar = createCar("Toyota", "Corolla", ["color", "red"], ["optionalFeature", "sunroof"]);
// Display the created car object
console.log(myCar);
