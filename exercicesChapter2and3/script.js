//min function
const min = (arg1, arg2) => {
    return arg1 > arg2 ? arg2 : arg1;
}
console.log(min(10,-22));

//Recursion

const isEven = (num) => {
    if(num === 0){
      return true
  }else if(num === 1){
      return false
  }else if(num < 0) {
      return isEven(-num);
  }else{
      return isEven(num -2);
  }

}

console.log(isEven(75));
console.log(isEven(50));
console.log(isEven(-9));

//Bean Counting

const countBs = (string) => {
    return string.split("").filter(x => x === "B").length;
}

console.log(countBs("Bonjour les amis BBBBBb"));

const countChar = (string, search) => {
    return string.split("").filter(x => x === search).length;
}
console.log(countChar("Bonjour les CooPains Anglais aah", "a"));

const countBs2 = (string) => {
    return countChar(string, "B");
}
console.log(countBs("Bonjour les amis BBBBBb"));

// Add of the solution without using map from the book, not a fan cause less readable.

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4