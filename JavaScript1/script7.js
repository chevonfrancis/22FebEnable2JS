`use strict`

//FUNCTIONS

/*
a block of cod ethat does a thing 
they are envoked (or run) when called
DRY principles (dont repeat yourself)
theyt can take argumemts 
globally scoped
*/

function hello(message) {
    console.log(message);
}

//hello(false);

//RETURNS 
//when a function reaches a return it stops

let bye = false;

function goodbye() {
    console.log("goodbye");
    return bye = true;
}
console.log(bye);

goodbye();

console.log(bye);

//VARIABLE RETURNS

function sum(a, b) {
    return a + b;
}
console.log(sum(11,11));

//ARROW FUNCTION
// => is to show this is a function and not naming a variable 

function log(data) {
    console.log(data);
}
//same as above 
log = (data) => {
    console.log(data);
}
//same as above saving space
log = (data) => {console.log(data)};

//simplifiying even more, can only use if there is one piece of data 
log = data => console.log(data);

//Exercise

function subCalc(num1, num2) {
    return num1 - num2;
}
console.log(subCalc(23, 134));


const welcome = function(name, age, gender) {
    return console.log(`My name is ${name},My age is ${age} years old,I am a ${gender}`);
}
welcome("mary", 34, "female");

powerUp = (n1,n2) => Math.pow(n1,n2);

console.log(powerUp(3,3));
