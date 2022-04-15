let a = "#"
let b = " "
let c = 7;
for (let i=1; i <= 7; i++){
    console.log(`${a.repeat(i) + b.repeat(c)}`);
    c -= 1;
}