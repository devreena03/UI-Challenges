

const canEat = { 
    eat: function() {
        console.log("eat");
    }
};

const canWalk = {
    walk: function() {
        console.log("walk");
    }
};

var obj = Object.assign({}, canEat, canWalk);
console.log(obj);

function Person() {}
Object.assign(Person.prototype, canEat, canWalk);
console.log(new Person());

function mixin(target, ...sources) { //JS rest parameter, it takes array of data
    // Copies all the properties from all the source objects 
    // to the target object. 
    Object.assign(target, ...sources); //expanding the array
} 

mixin(Person.prototype, canEat, canWalk);