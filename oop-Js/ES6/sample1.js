//=====This keyword=====
//current issue with this-----
'use strict'
const Circle = function(){
    this.draw = function(){
        console.log(this);
    }
}

const c = new Circle();
//Method call 
c.draw(); // it will print Circle, This is pointing to Circle

const draw = c.draw; //assigning method to a vriable
// Function call 
draw(); // "this" is point to global object
//it will print Window when run in browser
//or node global object when run in node, 
//--- slove ,use ''use strict' in top of file 'this' will print undefind
//(no longer accessable to gloabl object)

//with es-6 by default class body are kept in 'use strict' mode 
//so it prints undefind
class Circle1{
    draw(){
        console.log(this);
    }
}
const c1 = new Circle1();
c1.draw(); // it will print Circle, This is pointing to Circle
const draw1 = c1.draw; //assigning method to a vriable
draw1(); // undefined
