//A Vector Type

class Vec{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    plus(newVec){
        return new Vec(newVec.x + this.x, newVec.y + this.y);
    }
    minus(newVec){
        return new Vec(newVec.x - this.x, newVec.y - this.y);
    }
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let vec2 = new Vec(3,4);

console.log(vec2.length);
console.log(vec2.plus(new Vec(3,3)));

let vec3 = vec2.plus(new Vec(4,2));
console.log(vec3);

console.log(vec3.length);

console.log(new Vec(3, 4).length)
