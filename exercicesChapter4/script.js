//The sum of a range

const range = (start, end) => {
    const arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
};
console.log(range(1, 10));
//Sum array
const sum = (arr) => {
    return arr.reduce((a,b) => a + b, 0);

};
console.log(sum(range(1,10)));
//Sum array v2
const sum2 = (arr) => {
    let sum = 0;
    for (let elem of arr){
        sum += elem;
    }
    return sum;
};
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
};

console.log(rangev2(1,10,2));

//Solution from the book
function rangeSolution(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
};

function sumSolution(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
};

//Reversing an Array
const array = [1,2,3,4,5];
const reverseArray = (arr) => {
    const reversedArr = [];
    let j = 0;
    for(let i = arr.length-1; i >=0; i--){
        reversedArr[j] = arr[i];
        j++;
    }
    return reversedArr;
};

console.log(reverseArray(array));
console.log(array);

//reversing Array in place

const reverseArrayInPlace = (arr) => {
    const newArr = arr.slice();
    let j = 0;
    for(let i = newArr.length-1; i >= 0; i--){
        arr[j] = newArr[i];
        j++;
    }
    return arr;

}
reverseArrayInPlace(array);
console.log(array);

// Solution from book

function reverseArraySolution(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlaceSolution(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

//A list exercice

 const arrToBeListed = [1,2,3];
let list = {};
const arrayToList = (arr) => {
    for(let i = 0; i < arr.length; i++){
        list = {value: arr[i], rest: list};
    }
    return list;
};
arrayToList(arrToBeListed);

console.log(list);
let list2 = {};
const prepend = (elem, list) => { //did not understand the function so it works but not waht intended
    for(let i = 0; i <= elem; i++){
        list = {value: i, rest: list};
    };

    return list;
};
let list3 = prepend(5,list2);
console.log(list3);

function prepend1(value, list) { //function with good understand of what was asked
    return {value, rest: list};
}
list3 = prepend1(9,list2);

console.log(list3);
console.log(list);

const listToArray = (list) => {
    let arr = [];
    let i = 0;
    while(list.value !== 0){
        arr.push(list.value);
        list.value--;
    }
    return arr;
}

console.log(listToArray(list));
//solution from the book in an ordered way

function listToArray2(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

console.log(listToArray2(list));
// recursive way of nth
function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
};

function deepEqual(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
}