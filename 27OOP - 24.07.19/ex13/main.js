/* 1. needs to add:
2. put each class on different file and connect between them.
3. go over the code and see if there are any problems.
4. אלו מחלקות בדיוק צריכות להיות כאן (abstract / concrete)?
אלו פונקציות אבסטרקטיות צריכות להיות כאן?
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(X, Y, Color) {
        this.X = X;
        this.Y = Y;
        this.Color = Color;
    }
    Shape.prototype.print = function () {
        return "\n        X: " + this.X + "\n        Y: " + this.Y + "\n        Color: " + this.Color;
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(Radius, X, Y, Color) {
        var _this = _super.call(this, X, Y, Color) || this;
        _this.Radius = Radius;
        return _this;
    }
    Circle.prototype.print = function () {
        return "Circle:\n       " + _super.prototype.print.call(this) + "\n        Radius: " + this.Radius;
    };
    Circle.prototype.surfaceAreaCalculation = function () {
        // Radius * Radius * PI
        var Pi = 3.14;
        return "the surface area of the circle is: " + Math.floor(this.Radius * this.Radius * Pi);
    };
    Circle.prototype.scopeCalculation = function () {
        // 2 * PI * Radius
        var Pi = 3.14;
        return "the scope area of the circle is: " + Math.floor(2 * Pi * this.Radius);
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(SidesLength, X, Y, Color) {
        var _this = _super.call(this, X, Y, Color) || this;
        _this.SidesLength = SidesLength;
        return _this;
    }
    Square.prototype.print = function () {
        return "Square:\n       " + _super.prototype.print.call(this) + "\n        Sides Length: " + this.SidesLength;
    };
    Square.prototype.surfaceAreaCalculation = function () {
        // SidesLength * SidesLength
        return "the surface area of the circle is: " + this.SidesLength * this.SidesLength;
    };
    Square.prototype.scopeCalculation = function () {
        // 4 * SidesLength
        return "the scope area of the circle is: " + 4 * this.SidesLength;
    };
    Square.prototype.draw = function () {
        var _draw = '';
        for (var i = 0; i < this.SidesLength; i++) {
            for (var j = 0; j < this.SidesLength; j++) {
                if (i == 0 || i == this.SidesLength - 1) {
                    _draw += '*';
                }
                else if (j == 0 || j == this.SidesLength - 1) {
                    _draw += '*';
                }
                else {
                    _draw += ' ';
                }
            }
            _draw += '\n';
        }
        return _draw;
    };
    return Square;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(Length, Height, X, Y, Color) {
        var _this = _super.call(this, X, Y, Color) || this;
        _this.Length = Length;
        _this.Height = Height;
        return _this;
    }
    Rectangle.prototype.print = function () {
        return "Rectangle:\n       " + _super.prototype.print.call(this) + "\n        Length: " + this.Length + "\n        Height: " + this.Height;
    };
    Rectangle.prototype.surfaceAreaCalculation = function () {
        // Length * Height
        return "the surface area of the circle is: " + this.Length * this.Height;
    };
    Rectangle.prototype.scopeCalculation = function () {
        // 2 * (Length + Height)
        return "the scope area of the circle is: " + 2 * (this.Length + this.Height);
    };
    Rectangle.prototype.draw = function () {
        var _draw = '';
        for (var i = 0; i < this.Length; i++) {
            for (var j = 0; j < this.Height; j++) {
                if (i == 0 || i == this.Length - 1) {
                    _draw += '*';
                }
                else if (j == 0 || j == this.Height - 1) {
                    _draw += '*';
                }
                else {
                    _draw += ' ';
                }
            }
            _draw += '\n';
        }
        return _draw;
    };
    return Rectangle;
}(Shape));
function main() {
    var circle = new Circle(1, 2, 3, 'blue');
    var square = new Square(5, 5, 6, 'green');
    var rectangle = new Rectangle(20, 20, 9, 10, 'purple');
    /*  let toPrint = document.getElementById('toPrint');
     toPrint.innerHTML = `<u>Circle</u> <br> ${circle.print()} <br> ${circle.surfaceAreaCalculation()} <br>
     ${circle.scopeCalculation()} <br> <br>
     <u>Square</u> <br> ${square.draw()} <br> <br>
     <u>Rectangle</u> <br> ${rectangle.draw()}`;
  */
    console.log(circle.print());
    console.log(square.print());
    console.log(rectangle.print());
    console.log(circle.surfaceAreaCalculation());
    console.log(square.surfaceAreaCalculation());
    console.log(rectangle.surfaceAreaCalculation());
    console.log(circle.scopeCalculation());
    console.log(square.scopeCalculation());
    console.log(rectangle.scopeCalculation());
    console.log(square.draw());
    console.log(rectangle.draw());
}
main();
