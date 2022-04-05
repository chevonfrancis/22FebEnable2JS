`use strict`

/*

Semi Colon
Insertion

JS automatically inserts semi-colons for us at the end of a `line`

this can lead to unwanted behaviours
*/

//let a = 1;
//let b = 2;

//a 
//++
//b

//console.log(`a = ${a}, b = ${b}`);

let c = 1;
let d= 2;

c++;
d

//ITERATION

//loops 

//FOR 
//use a conductor
//run while a condition is NO LONGER met
for(let i =0; i < 5; i++) {
    console.log(`i = ${i}`);
}

//WHILE

//works with boolean
//runs until boolean is false
let condition = true;
let increment = 0;

while(condition) {
    console.log(`increment me `);
    increment++;

    if (increment == 3){
        condition = false;
    }
}


//DO_WHILE
//like while loop
// always runs at least once

let a = false;

{
    console.log(`we are running`);
}while(a);


//SWITCH_CASES
// run until a break or a return

let num = 1;

switch(num) {
    case 0:
        console.log(`num = ${num}`);
        break; 
        case 1:
        console.log(`num = ${num}`);
        break; 
        case 2:
        console.log(`num = ${num}`);
        break; 
        case 3:
        console.log(`num = ${num}`);
        break; 
        case 4:
        console.log(`num = ${num}`);
        break; 
    default:
        console.log(`this is out of scope`);

}