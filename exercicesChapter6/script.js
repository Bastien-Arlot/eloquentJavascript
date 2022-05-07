//A Vector Type

class Vec{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    plus(z){
        return new Vec(z.x + this.x, z.y + this.y);
    }
    minus(z){
        return new Vec(z.x - this.x, z.y - this.y);
    }
    get length(){
        return (this.x - 0) + (this.y - 0);
    }
}

let vec2 = new Vec(3,4);

console.log(vec2.length);
console.log(vec2.plus(new Vec(3,3)));

let vec3 = vec2.plus(new Vec(4,2));
console.log(vec3);

console.log(vec3.length);


