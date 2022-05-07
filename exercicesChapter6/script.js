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