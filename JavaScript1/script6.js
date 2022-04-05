`use strict`

// OBJECTS, ARRAY  and DATATYPES

//OBJECTS
//collection of data in any order
//made up of key: value pairs

let animal = new Object();
//console.log(typeof(animal));

animal[`name`] = `CLifford`;
animal[`type`] = `dog`;
animal[`size`] = `big`;

animal.color = `red`;
//console.log(animal);

//LITERAL NOTATION

let vehicle = {
    type : `bike`,
    seats : 1,
    wheels : 2
}
//console.log(vehicle);
//console.log(vehicle.seats);

let garage = [
    vehicle,
    { 
        type:`car`, seats:5, wheels:4
    }
]
//console.log(garage);

// lets fo some looping through an array

let x = [`a`,`b`, `c`];

for(let i = 0; i<x.length; i++){
   // console.log(x[i]);
}

//ENHANCED for loops 
//works with arrays of items
//will always loop through EVERY item

for(let item of x) {
   // console.log(item);
}

//Specific Methods to act on ARRAY
//reverse
///console/log(x.reverse());
//the join method
//console.log(x.join(`, the next letter is `));

//JSON
//JavaScript Object Notation
//Literal notation for JS objects

let newJSON = {
    name : `Chevon`,
    age : 28
}

// to convert JSON to different datatype
//we have to use OVERLOADED methods

//JSON to string 
let str = JSON.stringify(newJSON);

console.log(newJSON);
console.log(str);

let person = JSON.parse(`{"name": "patrick", "age":23}`);
console.log(person);

//Exercise 

let darthVadar = {
allegiance : "Empire",
weapon : "lightsaber",
sith : true
}
console.log(darthVadar);

console.log(`DarthVadars allegiance is to the  ${darthVadar.allegiance}`);
console.log(`DarthVadar's weapon of choice is the ${darthVadar.weapon}`);
console.log(`DarthVadar's is of the clan sith ${darthVadar.sith}`);
console.log(`DarthVadar's is of the clan Jedi ${darthVadar.sith ? "true" : "false"}`);

let myArray = ["hello", "everyone"];
console.log(myArray.length); 
 console.log(myArray.push("goodbye"));
 console.log(myArray.length); 
 console.log(myArray.shift());
 for(let eachElement of myArray) {
    console.log(eachElement);