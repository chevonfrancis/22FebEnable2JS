`use strict`

let i = 2;
while(i<=6) {
    console.log(i+1);
    i = i + 2;
}

// for loop 
//3 parts

// iterator -> variable -> starting value
//condition -> loop until this is not met 
// how we change out iterator
for(let i = 2; i <= 6; i =i +2) {
    //what we change every loop
    console.log(i+1);
}

//exercise 1

let a=100;
while(a <= 200) {
    a++;
    console.log(`a = ${a}`);
}

//exercise 2

let a=100;
while(a <= 200) {
    if(a%2 == 0) {
    console.log(`-`);
} else {
    console.log(`*`);
} a++
}
