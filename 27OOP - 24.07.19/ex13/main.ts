/* 1. needs to add: 
    * painting the shapes
2. put each class on different file and connect between them.
3. go over the code and see if there are any problems.
4. אלו מחלקות בדיוק צריכות להיות כאן (abstract / concrete)?
אלו פונקציות אבסטרקטיות צריכות להיות כאן?

בנוסף, צרו interface בשם IDrawable המכיל פונקציה בשם draw המציירת את הצורה על המסך.
ממשו את הממשק הזה במחלקה Rectangle ובמחלקה Square כך שרק המחלקות הללו יצירו את עצמן על המסך ע"י צורת כוכביות מלאה לפי מימדי הצורה בלבד (לצייר עיגול כוכביות זה יהיה טרוף מאש הגיהנום כרגע, אז אנו רוצים לממש את הממשק הזה רק עבור מלבן ועבור ריבוע.
עבור ריבוע יש לצייר ריבוע של כוכביות לפי הצלע.
עבור המלבן יש לצייר מלבן כוכביות לפי הרוחב והגובה.

בתוכנית הראשית צרו אובייקט אחד מכל צורה (עיגול, ריבוע, מלבן) וקיראו לכל אחת מהפונקציות שיש בו בכדי לראות שהכל עובד כמו שצריך.

*/

"use strict";

abstract class Shape {
    public X: number;
    public Y: number;
    public Color: string;

    constructor(X: number, Y: number, Color: string) {
        this.X = X;
        this.Y = Y;
        this.Color = Color;
    }

    protected print(): string {
        return `X: ${this.X} <br>
        Y: ${this.Y} <br>
        Color: ${this.Color} <br>`;
    };

    abstract surfaceAreaCalculation();
    abstract scopeCalculation();
}

class Circle extends Shape {
    public Radius: number;

    constructor(Radius: number, X: number, Y: number, Color: string, ) {
        super(X, Y, Color);
        this.Radius = Radius;
    }

    print(): string {
        return `${super.print()} Radius: ${this.Radius}`;
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

class Square extends Shape {
    public SidesLength: number;

    constructor(SidesLength: number, X: number, Y: number, Color: string) {
        super(X, Y, Color);
        this.SidesLength = SidesLength;
    }

    print(): string {
        return `${super.print()} Sides Length: ${this.SidesLength}`;
    }

    surfaceAreaCalculation(): string {
        // SidesLength * SidesLength
        return `the surface area of the circle is: ${this.SidesLength * this.SidesLength}`;
    }

    scopeCalculation(): string {
        // 4 * SidesLength
        return `the scope area of the circle is: ${4 * this.SidesLength}`;
    }
}

class Rectangle extends Shape {
    public Length: number;
    public Height: number;

    constructor(Length: number, Height: number, X: number, Y: number, Color: string) {
        super(X, Y, Color);
        this.Length = Length;
        this.Height = Height;
    }

    print(): string {
        return `${super.print()} Length: ${this.Length} <br> Height: ${this.Height}`;
    }

    surfaceAreaCalculation(): string {
        // Length * Height
        return `the surface area of the circle is: ${this.Length * this.Height}`;
    }

    scopeCalculation(): string {
        // 2 * (Length + Height)
        return `the scope area of the circle is: ${2 * (this.Length + this.Height)}`;
    }
}

function main() {
    let circle = new Circle(1, 2, 3, 'blue');
    let square = new Square(5, 5, 6, 'green');
    let rectangle = new Rectangle(7, 8, 9, 10, 'purple');

    let toPrint = document.getElementById('toPrint');
    toPrint.innerHTML = `<u>Circle</u> <br> ${circle.print()} <br> ${circle.surfaceAreaCalculation()} <br> ${circle.scopeCalculation()} <br> <br>
    <u>Square</u> <br> ${square.print()} <br> ${square.surfaceAreaCalculation()} <br> ${square.scopeCalculation()} <br> <br>
    <u>Rectangle</u> <br> ${rectangle.print()} <br> ${rectangle.surfaceAreaCalculation()} <br> ${rectangle.scopeCalculation()}`;
}
main();