// // My first solution
for(let i = 0; i <= 100; i++){
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    }else if (i % 5 ===0) {
        console.log("Buzz");
    }else if(i % 3 === 0){
            console.log("Fizz");
    }else{
        console.log(i);
    }
}
// Best solution from the book
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}