`use strict`

//SCOPE
//in JavaScript

//tow main types of scope
//LOCAL and GLOBAL

//function scope
//variable that are declared inside a function
//are not accessable fro outside of the function

//if you try to access them you will get a REFERENCE ERROR

let foo = () => {
   // let bar = `hello world`;
}

foo();

//console.log(bar);

//BLOCK SCOPE
//variables declared inside the block
//are only accessible from inside the block

{
    let x = 1;
}
//console.log(x);

//unless you declare you variable using the VAR keyword 
//this is one of the reasons we dont use var

{
    var y = 2;
}
//console.log(y);

//GLOBAL SCOPE

//Automatically GLOBAL

//if we dont declare a variable but we reference one inside a block 
//it is auitomatically created and added to the global scope
// use strict will stop this behaviour 

let globalVar = () => {
   //greeting = `Hello`;
}
globalVar();

//console.log(greeting);

//Standard Blobal

//declaring a variable outside of the code block
// it can be accessible from anywhere

//let a = `a`;

//console.log(a);

{
    //console.log(`a is = ${a}`);

}

let b = (a) => {
//console.log(`function b gives us ${a}`);
}

//b(a);

//HOW JAVASCRIPT LOOKS FOR VARIABLES 

// 1. Local (inside the block)
// 2. Global (outside of the block)
// 3. If none exists create and add to global scope


//EXERCISE ON SCOPE

function submit () {
    let n = `Foo`;
    if (n == `Foo` ) {
    let m = `Moo`
    }

console.log(n);
console.log(m);
} 
submit();


function doSomething() {
    console.log(k);
    console.log(foo());
    let k = 1;
    function foo() {
      return 2;
    }
  }
  doSomething();