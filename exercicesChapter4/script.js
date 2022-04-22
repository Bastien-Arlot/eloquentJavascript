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

//Bonus assignment

const rangev2 = (start, end, step) => {
    const arr = [];
    if(step !== null){
        for(let i = start; i <= end; i += step){
         arr.push(i);
        }
        return arr;
    }
}

console.log(rangev2(1,10,2));

//Solution from the book
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}