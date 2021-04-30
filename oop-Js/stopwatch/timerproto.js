function Stopwatch(){
    this.duration = 0;
    this.startTime;
    this.started = false;
   
    //getter function to access private properties 
    // Object.defineProperty(this, 'duration', {
    //     get: function() { return duration; }
    // });
}
Stopwatch.prototype.start = function(){
    if(this.started){
        throw new Error("Alreday Started");
    }
    this.startTime = new Date();
    this.started = true;
};
Stopwatch.prototype.stop = function(){
    if(!this.started){
        throw new Error("Alreday stopped");
    }
    var diff = new Date() - startTime;
    this.duration += diff/1000;
    this.started = false;
}
Stopwatch.prototype.reset = function(){
    this.duration = 0;
}
let s  = new Stopwatch();
s.start();
console.log(s.duration);

//no need pf getter for private member bcz it is public now
//issue : since duration is public now, anyone can update the value of duration
//in real, there will not be too many object for stopwatcher, so he is not good candidate for inheritence with prototype
//premeture optimization is root for all issue