console.log("test");
var Complex = /** @class */ (function () {
    function Complex(x, xi) {
        this.x = x;
        this.xi = xi;
    }
    Complex.prototype.add = function (a) {
        return new Complex(this.x + a.x, this.xi + a.xi);
    };
    Complex.prototype.subtract = function (a) {
        return new Complex(this.x - a.x, this.xi - a.xi);
    };
    Complex.prototype.module = function () {
        return (Math.sqrt((this.x * this.x) + (this.xi * this.xi)));
    };
    Complex.prototype.toString = function () {
        console.log('R:', this.x, ' I:', this.xi);
    };
    return Complex;
}());
var a = new Complex(2, 1);
var b = new Complex(3, 5);
a.toString();
var c = a.add(b);
c.toString();
var d = a.subtract(b);
d.toString();
console.log(c.module());
