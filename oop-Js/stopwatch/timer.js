function Stopwatch(){
    let duration = 0;
    let startTime;
    let started = false;
    this.start = function(){
        if(started){
            throw new Error("Alreday Started");
        }
        startTime = new Date();
        started = true;
    };
    this.stop = function(){
        if(!started){
            throw new Error("Alreday stopped");
        }
        var diff = new Date() - startTime;
        duration += diff/1000;
        started = false;
    }
    this.reset = function(){
        duration = 0;
    }
    //getter function to access private properties
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}
let s  = new Stopwatch();
// stopwatch.start();
// setTimeout(function () {
//     stopwatch.stop();
//     console.log(stopwatch.duration);
//     stopwatch.reset();
//     stopwatch.start();
// setTimeout(function () {
//     stopwatch.stop();
//     console.log(stopwatch.duration);
// }, 2000);
// }, 2000);
