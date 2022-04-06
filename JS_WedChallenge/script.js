`use strict`

for( let i = 1; i <= 100; i++) {
    switch(true) {
    case (i % 15 ==0): 
    console.log(`FizzBuzz`);
    break;
        case (i % 3==0): 
        console.log(`Fizz`);
        break;
            case (i % 15 ==0): 
            console.log(`Buzz`);
            break;
            default:
            console.log(i)
    }
}



for ( let i = 1; i <= 100; i++) {
    
    let str;

    // 0 == false;
    // `` == false;

    if (i%3) {
        str = ``;
    } else {
        str = `Fizz`;
    }

    if (i%5) {
        str = `${str}`;
    } else {
        str = `${str}Buzz`;
    }

    if (str) {
        console.log(str);
    } else {
        console.log(i);
    }

}



for( let i = 1; i <= 100; i++) {
    console.log(`${ i%3 ? '': 'Fizz'}${i%5 ? '' : 'Buzz'}` || i)

}


//what i did

<script>

       

for (a = 1; a <= 100; a++) {
    if(a % 3 === 0) {
    document.write("buzz");
} if(a % 5 === 0) {
    document.write("fizz");
}
    for(b = 1; b <= 1; b++) {
        document.write(a * b);
    }
    document.write("<br />");

}
</script> 