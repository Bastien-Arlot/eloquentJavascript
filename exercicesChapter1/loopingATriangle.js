// My solution
let a = "#"
for (let i=1; i <= 8; i++){
    console.log(`${a.repeat(i)}`);
}

// Other solution

for (let line = "#"; line.length < 8; line += "#")
    console.log(line);
