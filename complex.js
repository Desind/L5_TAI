"use strict";
console.log("test");
class Complex {
    constructor(x, xi) {
        this.x = x;
        this.xi = xi;
    }
    add(a) {
        return new Complex(this.x + a.x, this.xi + a.xi);
    }
    subtract(a) {
        return new Complex(this.x - a.x, this.xi - a.xi);
    }
    module() {
        return (Math.sqrt((this.x * this.x) + (this.xi * this.xi)));
    }
    toString() {
        console.log('R:', this.x, ' I:', this.xi);
    }
}
let a = new Complex(2, 1);
let b = new Complex(3, 5);
a.toString();
let c = a.add(b);
c.toString();
let d = a.subtract(b);
d.toString();
console.log(c.module());
