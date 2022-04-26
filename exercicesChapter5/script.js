const arr1 = [1,2,[1,2]];

console.log(arr1.reduce((a,b) => a.concat(b), []));
console.log(arrays.reduce((flat, current) => flat.concat(current), [])); // solution from the book


