/*  1. in the exercise function reporter doesn't returns anything, how am is suppose to see what happens besides console.log.
    2. needs to check if Graphics.showShapes() works.
    3. check why radius always equal the same number (when i call Graphics.showShapes()).
    4. check if i used the polymorphism correctly.
*/

"use strict";

interface drawShape {
    draw();
}

abstract class Shape {
    public X: number;
    public Y: number;
    public Color: string;

    constructor(X: number, Y: number, Color: string) {
        this.X = X;
        this.Y = Y;
        this.Color = Color;
    }
    public print() {
        return `
        X: ${this.X}
        Y: ${this.Y}
        Color: ${this.Color}`
    }
    abstract surfaceAreaCalculation(): string;
    abstract scopeCalculation(): string;
}

class Circle extends Shape {
    static Radius: number;

    constructor(Radius: number, X: number, Y: number, Color: string, ) {
        super(X, Y, Color);
        Circle.Radius = Radius;
    }

    print(): string {
        return `Circle:
       ${super.print()}
        Radius: ${Circle.Radius}`;
    }

    surfaceAreaCalculation(): string {
        // Radius * Radius * PI
        const Pi = 3.14;
        return `the surface area of the circle is: ${Math.floor(Circle.Radius * Circle.Radius * Pi)}`;
    }

    scopeCalculation(): string {
        // 2 * PI * Radius
        const Pi = 3.14;
        return `the scope area of the circle is: ${Math.floor(2 * Pi * Circle.Radius)}`;
    }
}

class Square extends Shape implements drawShape {
    private SidesLength: number;

    constructor(SidesLength: number, X: number, Y: number, Color: string) {
        super(X, Y, Color);
        this.SidesLength = SidesLength;
    }

    print(): string {
        return `Square:
       ${super.print()}
        Sides Length: ${this.SidesLength}`;
    }

    surfaceAreaCalculation(): string {
        // SidesLength * SidesLength
        return `the surface area of the Square is: ${this.SidesLength * this.SidesLength}`;
    }

    scopeCalculation(): string {
        // 4 * SidesLength
        return `the scope area of the Square is: ${4 * this.SidesLength}`;
    }

    draw() {
        let _draw = '';
        for (let i = 0; i < this.SidesLength; i++) {
            for (let j = 0; j < this.SidesLength; j++) {
                if (i == 0 || i == this.SidesLength - 1) {
                    _draw += '*';
                } else if (j == 0 || j == this.SidesLength - 1) {
                    _draw += '*';
                } else {
                    _draw += ' ';
                }
            }
            _draw += '\n';
        }
        return _draw;
    }
}

class Rectangle extends Shape implements drawShape {
    public Length: number;
    public Height: number;

    constructor(Length: number, Height: number, X: number, Y: number, Color: string) {
        super(X, Y, Color);
        this.Length = Length;
        this.Height = Height;
    }

    print(): string {
        return `Rectangle:
       ${super.print()}
        Length: ${this.Length}
        Height: ${this.Height}`;
    }

    surfaceAreaCalculation(): string {
        // Length * Height
        return `the surface area of the Rectangle is: ${this.Length * this.Height}`;
    }

    scopeCalculation(): string {
        // 2 * (Length + Height)
        return `the scope area of the Rectangle is: ${2 * (this.Length + this.Height)}`;
    }

    draw() {
        let _draw = '';
        for (let i = 0; i < this.Length; i++) {
            for (let j = 0; j < this.Height; j++) {
                if (i == 0 || i == this.Length - 1) {
                    _draw += '*';
                } else if (j == 0 || j == this.Height - 1) {
                    _draw += '*';
                } else {
                    _draw += ' ';
                }
            }
            _draw += '\n'
        }
        return _draw;
    }
}

class Tester {
    public static test(): void {
        let randomShape: Shape;
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        if (randomNum == 1) {
            randomShape = new Circle(1, 2, 3, 'blue');
            console.log(`${randomShape.print()} \n ${randomShape.surfaceAreaCalculation()} \n ${randomShape.scopeCalculation()} \n diameter: ${Circle.Radius * 2}`);
        } else if (randomNum == 2) {
            randomShape = new Square(5, 5, 6, 'green');
            console.log(`${randomShape.print()} \n ${randomShape.surfaceAreaCalculation()} \n ${randomShape.scopeCalculation()}`);
        } else if (randomNum == 3) {
            randomShape = new Rectangle(20, 20, 9, 10, 'purple');
            console.log(`${randomShape.print()} \n ${randomShape.surfaceAreaCalculation()} \n ${randomShape.scopeCalculation()}`);
        }
    }
}

class Reporter {
    public showReport(s: Shape): void {
        let z = `${s.print()} \n ${s.surfaceAreaCalculation()} \n ${s.scopeCalculation()}`;
        if (s instanceof Square || s instanceof Rectangle) {
            console.log(`${z} \n${s.draw()}`);
        } else {
            console.log(z);
        }
    }
}

class Graphics {
    public static showShapes(): void {
        let array = [];
        array.length = 20;
        let colorsArray = ['gray', 'black', 'white'];
        for (let i = 0; i < array.length; i++) {
            let randomNum = Math.floor(Math.random() * 3) + 1;
            if (randomNum == 1) {
                array[i] = new Circle((Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), colorsArray[Math.floor(Math.random() * 2)]);
            } else if (randomNum == 2) {
                array[i] = new Square((Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), colorsArray[Math.floor(Math.random() * 2)]);
            } else if (randomNum == 3) {
                array[i] = new Rectangle((Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), colorsArray[Math.floor(Math.random() * 2)]);
            }
        }
        console.log(array);
        for (let i = 0; i < array.length; i++) {
            let z = `${array[i].print()} \n ${array[i].surfaceAreaCalculation()} \n ${array[i].scopeCalculation()}`;
            if (array[i] instanceof Square || array[i] instanceof Rectangle) {
                console.log(`${z} \n${array[i].draw()}`);
            } else {
                console.log(`${z} \n diameter: ${Circle.Radius * 2}`);
            }
        }
    }
}

function main() {
    Tester.test();
    let circle = new Circle(1, 2, 3, 'blue');
    let square = new Square(5, 5, 6, 'green');
    let rectangle = new Rectangle(20, 20, 9, 10, 'purple');
    let ReporterObj = new Reporter;
    ReporterObj.showReport(circle);
    ReporterObj.showReport(square);
    ReporterObj.showReport(rectangle);
    Graphics.showShapes();
}

main();