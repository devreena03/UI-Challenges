//Parent
function Shape(){

}
Shape.prototype.draw = function(){
    console.log("draw shape");
}

function Circle(){

}

//making circle child of shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

//override of function should happen after making child parent relation
Circle.prototype.draw = function(){
    console.log("draw circle");
}

function Squar(){

}
//below line will override draw method of squar to parent reference,  
// Squar.prototype.draw = function(){
//     console.log("draw Squar");
// }
//making circle child of shape

Squar.prototype = Object.create(Shape.prototype);
Squar.prototype.constructor = Squar;
Squar.prototype.draw = function(){
    console.log("draw Squar");
}

var lists = [
    new Circle(), new Squar()
];
for(var list of lists){
    list.draw()
}

