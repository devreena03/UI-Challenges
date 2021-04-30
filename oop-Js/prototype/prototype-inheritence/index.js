function HtmlElement(){
    this.click = function(){
        console.log("click");
    }
}

HtmlElement.prototype.focus = function(){
    console.log("focus");
}

function HtmlSelectElement(){
    this.item =[];
    this.addItem = function(item){
        console.log("add");
        this.item.push(item);
    }
    this.removeItem = function(item){
        console.log("removed");
        
    }
}
//inheritence-creating HtmlSelect as child of HtmlElement
HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;