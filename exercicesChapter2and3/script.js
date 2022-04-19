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
