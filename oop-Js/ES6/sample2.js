//==========private varible/method
//1. Using symbols to implement private properties and methods
//symbol is a unique identifier
//when we call it we get new value
const _size = Symbol(); //not use new
const _draw = Symbol();

class Square {
    constructor(size) {
        // "Kind of" private property 
        this[_size] = size; 
    }

    // "Kind of" private method 
    [_draw]() {
        console.log("draw");
    }

    // By "kind of" I mean: these properties and methods are essentally
    // part of the object and are accessible from the outside. But accessing
    // them is hard and awkward. 
}
const s = new Square(10);
console.log(s._size);
const key=Object.getOwnPropertySymbols(s)[0];
console.log(s[key]);

// using WeakMaps to implement private properties and methods
//weakmap is a dictionary, where key is weak
//when it is not used it will be garbage collected
//this private declaration helps with module
const _width = new WeakMap();
const _move = new WeakMap();

class Rectangle {
    constructor(width) {
        _width.set(this, width);

        _move.set(this, () => {
            //'this' is undefined bcz of global object reference 
            //and use of 'use restrict by default by class body
            //solve for this is arrow function
            console.log('move', this); 
        });
    }

    draw() {
        _move.get(this)();
        console.log('Rectangle with width' + _width.get(this));
    }
}
const r = new Rectangle(10);
r.draw();

//getter and setter
const _radius = new WeakMap();
class Circle{
    constructor(radius){
        _radius.set(this, radius);
    }

    get radius(){
        return _radius.get(this);
    }

    set radius(value){
        if(value<0) throw new Error("invalid");
        _radius.set(this, value);
    }
}

const c = new Circle(1);
c.radius =10;
console.log(c.radius);
