class Circle{
    constructor(radius){
        this.radius = radius;
        this.move = function(){ //instance method in normal js
            console.log("move..");
        }
    }

    draw(){ //prototype method in normal js
        console.log('draw');
    }
}

const c = new Circle(2);

//declear static method===========
class Circle1{
    constructor(radius){
        this.radius = radius;
        this.move = function(){
            console.log("move..");
        }
    }
    //instance method in es6
    draw(){ 
        console.log('draw');
    }
    //static method in ES6 , class method
    static fill(color){
        console.log("filling circle with "+color);
    }
}

//static method can be called only via class name
Circle1.fill("red");
const c1 = new Circle1(2);
c1.draw("some"); //  throw error, not a function




