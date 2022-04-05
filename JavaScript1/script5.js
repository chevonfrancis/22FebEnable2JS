`use strict`

//CONDITIONALS
//Truthy and Falsey

/*

Falsey:
boolean `false`
0 
undefined
null
``''""
NaN - not a number 

TRUTHY:

Everything else 

*/

//IF (ELSE IF and ELSE)
//checks a condition, then run a code block if it is met

let a = 3;

if(a == 2) {
    console.log(`a is currently ${a}`);
} else if (a) {
    console.log(`a is truthy`); 
} else {
    console.log(`a is falsey`)
}

//TERNARY IF
// shorthand version of an IF / ELSE statement

let x = 1;

if (x == 1) {
    console.log(`Hello`);
} else {
    console.log(`GoodBye`);
}

// this is an alternative to write the above -> just simpler
x == 1 ? console.log(`hello`) : console.log(`goodbye`); 

// EQUALITY and TYPE

//type is mutable in JS
// so you can compare diffeent data types

1 == `1` ? console.log(true) : console.log(false);

//JS is mutating the type so that ONE is equal to ONE
//it is checking the value not the type

// if you want to ALSO evalute tehtype 

1 == `1` ? console.log(true) : console.log(false);

//the strictly equals operator `===`
//this checks type and value

//Exercise I

let strictA = true;
let strictB = 1;

console.log(strictA == strictB);
console.log(strictA === strictB);

console.log(strictA != strictB);
console.log(strictA !== strictB);


let f = 17;

if(f >= 18 && f <= 65) {
    console.log(`in the age range`);
} else if(f < 18) {
    console.log(`f is jail bait`);
}else {
    console.log(`out of range`);
}

let k = 45;

if (k >= 50) {
    console.log(`50 or above 50`);
} else {
    console.log(`below 50`);
}