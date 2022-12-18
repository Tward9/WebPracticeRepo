// Task

// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

// Add an area method to Rectangle's prototype.
// Create a Square class that satisfies the following:
// It is a subclass of Rectangle.
// It contains a constructor and no other methods.
// It can use the Rectangle class' area method to print the area of a Square object.
// Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.

//solution
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
Rectangle.prototype.area = function () {
    let area = this.w * this.h;
    return area;
}
class Square extends Rectangle {
    constructor(w) {
        super(w);
        this.h = w;
    }

}

const rec = new Rectangle(3, 4);
const sqr = new Square(3);
console.log(sqr.area());

//solved