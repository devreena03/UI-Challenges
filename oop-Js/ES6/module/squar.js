const _length = new WeakMap();

//es-6 module way of exporting file
export class Squar {
    constructor(length) {
        _length.set(this, length);
    }

    draw() {
        console.log('Squar with length: ' + _length.get(this));
    }
}