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
    public Radius: number;

    constructor(Radius: number, X: number, Y: number, Color: string, ) {
        super(X, Y, Color);
        this.Radius = Radius;
    }

    print(): string {
        return `Circle:
       ${super.print()}
        Radius: ${this.Radius}`;
    }

    surfaceAreaCalculation(): string {
        // Radius * Radius * PI
        const Pi = 3.14;
        return `the surface area of the circle is: ${Math.floor(this.Radius * this.Radius * Pi)}`;
    }

    scopeCalculation(): string {
        // 2 * PI * Radius
        const Pi = 3.14;
        return `the scope area of the circle is: ${Math.floor(2 * Pi * this.Radius)}`;
    }
}

class Square extends Shape implements drawShape {
    public SidesLength: number;

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
        return `the surface area of the circle is: ${this.SidesLength * this.SidesLength}`;
    }

    scopeCalculation(): string {
        // 4 * SidesLength
        return `the scope area of the circle is: ${4 * this.SidesLength}`;
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
        return `the surface area of the circle is: ${this.Length * this.Height}`;
    }

    scopeCalculation(): string {
        // 2 * (Length + Height)
        return `the scope area of the circle is: ${2 * (this.Length + this.Height)}`;
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
        let randomeShape: Shape;

        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        console.log(randomNum);
        if (randomNum == 1) {
            randomeShape = new Circle(1, 2, 3, 'blue');
            console.log(`${randomeShape.print()} \n ${randomeShape.surfaceAreaCalculation()} \n ${randomeShape.scopeCalculation()}`);
        } else if (randomNum == 2) {
            randomeShape = new Square(5, 5, 6, 'green');
            console.log(`${randomeShape.print()} \n ${randomeShape.surfaceAreaCalculation()} \n ${randomeShape.scopeCalculation()}`);
        } else if (randomNum == 3) {
            randomeShape = new Rectangle(20, 20, 9, 10, 'purple');
            console.log(`${randomeShape.print()} \n ${randomeShape.surfaceAreaCalculation()} \n ${randomeShape.scopeCalculation()}`);
        }
    }
}
/* 
class Reporter {
    public showReport(s: Shape): void {
        // ...
    }
}

class Graphics {
    public static showShapes(): void {
        // ...
    }
} */


/* function main() {
    let circle = new Circle(1, 2, 3, 'blue');
    let square = new Square(5, 5, 6, 'green');
    let rectangle = new Rectangle(20, 20, 9, 10, 'purple');

    //let toPrint = document.getElementById('toPrint');
    //toPrint.innerHTML = `<u>Circle</u> <br> ${circle.print()} <br> ${circle.surfaceAreaCalculation()} <br>
    //${circle.scopeCalculation()} <br> <br>
    //<u>Square</u> <br> ${square.draw()} <br> <br>
    //<u>Rectangle</u> <br> ${rectangle.draw()}`; 

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
main(); */
Tester.test();