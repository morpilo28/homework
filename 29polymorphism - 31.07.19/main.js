/*  1. in the exercise function reporter doesn't returns anything, how am is suppose to see what happens besides console.log.
    2. needs to check if Graphics.showShapes() works.
    3. check why radius always equal the same number (when i call Graphics.showShapes()).
    4. check if i used the polymorphism correctly.
*/
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
        return "\n        X: " + this.X + "\n        Y: " + this.Y + "\n        Color: " + this.Color;
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(Radius, X, Y, Color) {
        var _this = _super.call(this, X, Y, Color) || this;
        Circle.Radius = Radius;
        return _this;
    }
    Circle.prototype.print = function () {
        return "Circle:\n       " + _super.prototype.print.call(this) + "\n        Radius: " + Circle.Radius;
    };
    Circle.prototype.surfaceAreaCalculation = function () {
        // Radius * Radius * PI
        var Pi = 3.14;
        return "the surface area of the circle is: " + Math.floor(Circle.Radius * Circle.Radius * Pi);
    };
    Circle.prototype.scopeCalculation = function () {
        // 2 * PI * Radius
        var Pi = 3.14;
        return "the scope area of the circle is: " + Math.floor(2 * Pi * Circle.Radius);
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
        return "the surface area of the Square is: " + this.SidesLength * this.SidesLength;
    };
    Square.prototype.scopeCalculation = function () {
        // 4 * SidesLength
        return "the scope area of the Square is: " + 4 * this.SidesLength;
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
        return "the surface area of the Rectangle is: " + this.Length * this.Height;
    };
    Rectangle.prototype.scopeCalculation = function () {
        // 2 * (Length + Height)
        return "the scope area of the Rectangle is: " + 2 * (this.Length + this.Height);
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
var Tester = /** @class */ (function () {
    function Tester() {
    }
    Tester.test = function () {
        var randomShape;
        var randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        if (randomNum == 1) {
            randomShape = new Circle(1, 2, 3, 'blue');
            console.log(randomShape.print() + " \n " + randomShape.surfaceAreaCalculation() + " \n " + randomShape.scopeCalculation() + " \n diameter: " + Circle.Radius * 2);
        }
        else if (randomNum == 2) {
            randomShape = new Square(5, 5, 6, 'green');
            console.log(randomShape.print() + " \n " + randomShape.surfaceAreaCalculation() + " \n " + randomShape.scopeCalculation());
        }
        else if (randomNum == 3) {
            randomShape = new Rectangle(20, 20, 9, 10, 'purple');
            console.log(randomShape.print() + " \n " + randomShape.surfaceAreaCalculation() + " \n " + randomShape.scopeCalculation());
        }
    };
    return Tester;
}());
var Reporter = /** @class */ (function () {
    function Reporter() {
    }
    Reporter.prototype.showReport = function (s) {
        var z = s.print() + " \n " + s.surfaceAreaCalculation() + " \n " + s.scopeCalculation();
        if (s instanceof Square || s instanceof Rectangle) {
            console.log(z + " \n" + s.draw());
        }
        else {
            console.log(z);
        }
    };
    return Reporter;
}());
var Graphics = /** @class */ (function () {
    function Graphics() {
    }
    Graphics.showShapes = function () {
        var array = [];
        array.length = 20;
        var colorsArray = ['gray', 'black', 'white'];
        for (var i = 0; i < array.length; i++) {
            var randomNum = Math.floor(Math.random() * 3) + 1;
            if (randomNum == 1) {
                array[i] = new Circle((Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), colorsArray[Math.floor(Math.random() * 2)]);
            }
            else if (randomNum == 2) {
                array[i] = new Square((Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), colorsArray[Math.floor(Math.random() * 2)]);
            }
            else if (randomNum == 3) {
                array[i] = new Rectangle((Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), colorsArray[Math.floor(Math.random() * 2)]);
            }
        }
        console.log(array);
        for (var i = 0; i < array.length; i++) {
            var z = array[i].print() + " \n " + array[i].surfaceAreaCalculation() + " \n " + array[i].scopeCalculation();
            if (array[i] instanceof Square || array[i] instanceof Rectangle) {
                console.log(z + " \n" + array[i].draw());
            }
            else {
                console.log(z + " \n diameter: " + Circle.Radius * 2);
            }
        }
    };
    return Graphics;
}());
function main() {
    Tester.test();
    var circle = new Circle(1, 2, 3, 'blue');
    var square = new Square(5, 5, 6, 'green');
    var rectangle = new Rectangle(20, 20, 9, 10, 'purple');
    var ReporterObj = new Reporter;
    ReporterObj.showReport(circle);
    ReporterObj.showReport(square);
    ReporterObj.showReport(rectangle);
    Graphics.showShapes();
}
main();
