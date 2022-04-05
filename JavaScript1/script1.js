`use strict`

//VARIABLES and DATA TYPES

/* 

in javascript data types are DYNAMIC  and MUTABLE 
-> they are decided at runtime
-> stored in memory as text
*/

/*

we declare variables with
let -> standard variables
const -> constant
var -> th old way we dont use anymore

nameing standard is camelCase
examples
$variableName
_myVariable

*/

let variableOne = `Hello`;
const variableTwo = 4;
var oldVariable = true;

// DATATYPES

/* 
in JS rthere are two 'types' of types 
primative and objects

objects have one datatype -> objects
primatives have everything else
-> boolean, number, string, symbol, null, bigint, undefined

*/

let aBoolean = false;
let aNumber = 10;
let aString = `text6734539`;
let aBigInt = 9999999999999;
let aSymbol = Symbol(`description`);
let aNull = null;
let anUndefined; 

//OBJECTS
/* 
they are a collection of properties
they are mutable 
they are made up of key: value pairs
*/

let myObject = {
    key : `value`,
    anotherKey : 12345
}

//onsole.log(myObject.key);

// STRING CONCATENATION
/*
joining strings end to end
quite memory intensive
*/

let string1 = `41 * 21 = `;
let result1 = 41 * 21;
console.log(string1 + result1);

//STRING INTERPOLATION
/*
uses ONE string only 
uses string literals containing placeholders
sometimes calID `template literals`
*/
let string2 = `42 * 13 = ${42 * 13}`;
console.log(string2);

let a;
let b = `12345`;
let c = 12345;
let d = true;
let e = {a:"JavaScript"};


