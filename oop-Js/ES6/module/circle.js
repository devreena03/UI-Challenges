const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with width' + _radius.get(this));
    }
}
//for more than one class to export
// module.exports.Circle = Circle;
// module.exports.Squar = Squar;

module.exports = Circle;

