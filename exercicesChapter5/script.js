//Flattening exercise
const arr1 = [1,2,[1,2]];

console.log(arr1.reduce((a,b) => a.concat(b), []));
console.log(arr1.reduce((flat, current) => flat.concat(current), [])); // solution from the book

//Your Own Loop exercise

const yourOwnLoop = (value, testFunction, updateFunction, bodyFunction ) => {
    for (let i  = value; testFunction(i); i = updateFunction(i)){
        bodyFunction(i);
    }
}

yourOwnLoop(3, x => x > 0, x => x -1, console.log);

//solution from the book
function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}

//Everything exercise

const every = (arr, functionTest) => {
    for(let i = 0; i < arr.length; i++){
        if(!functionTest(arr[i])) return false;
    }
    return true;
}
const every2 = (arr, functionTest) => {
    return !arr.some(x => !functionTest(x));
}
console.log(every([3,5,6], x => x > 100));

console.log(every2([3,5,6], x => x < 100));

//Solution from the book

function every3(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) return false;
    }
    return true;
}

function every4(array, predicate) {
    return !array.some(element => !predicate(element));
}