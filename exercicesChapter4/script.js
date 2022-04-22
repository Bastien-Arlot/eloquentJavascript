//The sum of a range

const range = (start, end) => {
    const arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}
console.log(range(1, 10));

const sum = (arr) => {
    return arr.reduce((a,b) => a + b, 0);

}
console.log(sum(range(1,10)));