let person = {
    name : "Reena"
};
console.log(Object.keys(person)); // it will not print ObjectBase proto type methods like toString

//it will print a array
//which intern has a ArrayBase prototype
//which has ObjectBase prototype -> Multilevel inheritence 

let objectBase = Object.getPrototypeOf(person); 
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString") ; //it will show config for toString method

console.log(descriptor);
//configurable: true -> object can be deleted
//enumerable: false -> it will not show as normal object property
//value: ƒ toString()
//writable: true -> we can change the value, means override the values

//property descriptor : we can define the object property configuration with these, if it set and person try to do the restricted operation, 
//it will simple unchanged the value, no error, no warnnings

Object.defineProperty(person, "name", {
    writable: false, //we can't change
    enumerable: false, //it will not show in object.keys
    configurable: false //can't delete
});

Object.keys(person) //it will not show name
person.name = "some" //it will not throw error. nor update the value
delete person.name; //no error, no delete, return false

//======================

function Circle(radius) {
    //instance members
    this.radius = radius;

    this.draw = function(){
        console.log('draw');
    }
}

const c1 = new Circle(1);
const c2 = new Circle(2);

//c1 and c2 both has a draw() method
//so if we hv 1000 obj then 1000 draw() method will be there
//so we can move this draw method to prototype parent 
//so all circle object can use it with one copy of draw method
//Circle.prototype === c1.__proto__

//prototype method
Circle.prototype.draw = function(){
    console.log('draw');
}
const c3 = new Circle(1);
const c4 = new Circle(2);

console.log(c3.toString());
//overriding toString
Circle.prototype.toString = function(){
    return "circle with radius " + this.radius;
}

console.log(new Circle(5).toString());

//Iterarting instance and prototype
function Circle1(radius) {
    //instance members
    this.radius = radius;

    this.move = function(){
        console.log('draw');
    }
}
Circle1.prototype.draw = function(){
    console.log('draw');
}
const circle = new Circle1(10);

//Returns instance/own member only
console.log(Object.keys(circle));

//foreach returns all member (instance+prototype)
for(let key in circle)
 console.log(key);

 //filter only instance member
circle.hasOwnProperty("move") // true
circle.hasOwnProperty("draw") // false