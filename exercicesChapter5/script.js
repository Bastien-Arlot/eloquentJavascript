//Flattening exercice
const arr1 = [1,2,[1,2]];

console.log(arr1.reduce((a,b) => a.concat(b), []));
console.log(arr1.reduce((flat, current) => flat.concat(current), [])); // solution from the book

//Your Own Loop exercice

const yourOwnLoop = (value, testFunction, updateFunction, bodyFunction ) => {
    for (let i  = value; testFunction(i); i = updateFunction(i)){
        bodyFunction(i);
    }
}

yourOwnLoop(3, x => x > 0, x => x -1, console.log);

