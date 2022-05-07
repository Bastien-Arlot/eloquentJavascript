//A Vector Type

class Vec{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    plus(z){
        return z + (this.x + this.y);
    }
    minus(z){
        return z - (this.x + this.y);
    }
    get length(){
        return console.log(this.x - 0, this.y - 0);
    }
}

let Vec2 = new Vec(4,2);

Vec2.length;
console.log(Vec2.plus(2));