// First tentative but wasnt satisfied of the non modulable code + didnt check that lines were not all the same
let size = 8;
let board = "";
console.log(("#" + " " + "#" + " " + "#" + " " + "#" + "\n").repeat(size));

// Solution that answer the problem
let a = " ";
let b = "#"
for(let i = 1; i <= size; i++){
   if (i % 2 !== 0){
      board += (a+b).repeat(4);
      board += "\n";
   }else{
      board += (b+a).repeat(4);
      board += "\n";
   }
}
console.log(board)
// Solution from the book using double loop and stocking the result and didnt do it myself



for (let y = 0; y < size; y++) {
   for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
         board += " ";
      } else {
         board += "#";
      }
   }
   board += "\n";
}

console.log(board);