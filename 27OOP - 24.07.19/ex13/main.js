"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
        return "X: " + this.X + " <br>\n        Y: " + this.Y + " <br>\n        Color: " + this.Color + " <br>";
    };
    ;
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
        return _super.prototype.print.call(this) + " Radius: " + this.Radius;
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
        return _super.prototype.print.call(this) + " Sides Length: " + this.SidesLength;
    };
    Square.prototype.surfaceAreaCalculation = function () {
        // SidesLength * SidesLength
        return "the surface area of the circle is: " + this.SidesLength * this.SidesLength;
    };
    Square.prototype.scopeCalculation = function () {
        // 4 * SidesLength
        return "the scope area of the circle is: " + 4 * this.SidesLength;
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
        return _super.prototype.print.call(this) + " Length: " + this.Length + " <br> Height: " + this.Height;
    };
    Rectangle.prototype.surfaceAreaCalculation = function () {
        // Length * Height
        return "the surface area of the circle is: " + this.Length * this.Height;
    };
    Rectangle.prototype.scopeCalculation = function () {
        // 2 * (Length + Height)
        return "the scope area of the circle is: " + 2 * (this.Length + this.Height);
    };
    return Rectangle;
}(Shape));
function main() {
    var circle = new Circle(1, 2, 3, 'blue');
    var square = new Square(5, 5, 6, 'green');
    var rectangle = new Rectangle(7, 8, 9, 10, 'purple');
    var toPrint = document.getElementById('toPrint');
    toPrint.innerHTML = "<u>Circle</u> <br> " + circle.print() + " <br> " + circle.surfaceAreaCalculation() + " <br> " + circle.scopeCalculation() + " <br> <br>\n    <u>Square</u> <br> " + square.print() + " <br> " + square.surfaceAreaCalculation() + " <br> " + square.scopeCalculation() + " <br> <br>\n    <u>Rectangle</u> <br> " + rectangle.print() + " <br> " + rectangle.surfaceAreaCalculation() + " <br> " + rectangle.scopeCalculation();
}
main();
