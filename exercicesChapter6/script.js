//A Vector Type

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    plus(newVec) {
        return new Vec(newVec.x + this.x, newVec.y + this.y);
    }

    minus(newVec) {
        return new Vec(newVec.x - this.x, newVec.y - this.y);
    }
}

let vec2 = new Vec(3, 4);

console.log(vec2.length);
console.log(vec2.plus(new Vec(3, 3)));

let vec3 = vec2.plus(new Vec(4, 2));
console.log(vec3);

console.log(vec3.length);

console.log(new Vec(3, 4).length)

//Groups

class Group {
    constructor() {
        this.container = [];
    }

    add(value) {
        if (!this.container.includes(value)) {
            this.container.push(value);
        } else {
            alert("This value is already in the group");
        }
    }

    remove(value) {
        if (this.container.includes(value)) {
            let index = this.container.indexOf(value);
            this.container.splice(index, 1);
        } else {
            alert("this value isnt in the group");
        }
    }
    has(value){
        if(this.container.includes(value)){
            return true;
        }else{
            return false;
        }
    }
    static from(arr){
        let group = new Group;

        for(let x of arr){
            group.add(x);
        }
        return group;
    }
}

let group1 = new Group();
group1.add(2);
console.log(group1);
group1.add(5);
console.log(group1);
group1.remove(3);
group1.add(5);
group1.remove(2);
console.log(group1);
console.log(group1.has(5));
console.log(group1.has(2));
console.log(group1.container.indexOf(5));
console.log(group1.container.indexOf(9));
let group = Group.from([10, 20]);
console.log(group);

//Solution from the book

// class Group {
//     constructor() {
//         this.members = [];
//     }
//
//     add(value) {
//         if (!this.has(value)) {
//             this.members.push(value);
//         }
//     }
//
//     delete(value) {
//         this.members = this.members.filter(v => v !== value);
//     }
//
//     has(value) {
//         return this.members.includes(value);
//     }
//
//     static from(collection) {
//         let group = new Group;
//         for (let value of collection) {
//             group.add(value);
//         }
//         return group;
//     }
// }
//
// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));