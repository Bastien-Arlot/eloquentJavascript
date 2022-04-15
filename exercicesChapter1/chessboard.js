// First tentative but wasnt satisfied of the non modulable code + didnt check that lines were not all the same
let size = 8;
console.log(("#" + " " + "#" + " " + "#" + " " + "#" + "\n").repeat(size));

// Solution that answer the problem
let a = " ";
let b = "#"
for(let i = 1; i <= size; i++){
   if (i % 2 !== 0){
      console.log(`${(a+b).repeat(4)} `);
   }else{
      console.log(`${(b+a).repeat(4)} `);
   }
}

