//The sum of a range

const range = (start, end) => {
    const arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}
console.log(range(1, 10));
//Sum array
const sum = (arr) => {
    return arr.reduce((a,b) => a + b, 0);

}
console.log(sum(range(1,10)));
//Sum array v2
const sum2 = (arr) => {
    let sum = 0;
    for (let elem of arr){
        sum += elem;
    }
    return sum;
}
console.log(sum2(range(1,10)));