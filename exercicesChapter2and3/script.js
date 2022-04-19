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