class Shape{
    move(){
        console.log('parent move');
    }
}

class Circle extends Shape {
    constructor(){
        super();//Must call super constructor in derived class 
        //before accessing 'this' or returning from derived constructor
        console.log("In child construtor");
    }
    draw(){
        console.log('draw');
    }
    move(){
        super.move();
        console.log('child move');
    }
}

const c =new Circle();
c.move();

//method riding(overriding)


