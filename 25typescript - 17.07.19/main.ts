'use strict';
// -------------ex1------------
(function () {
    class Speaker {
        color: string;
        _volume: number;

        get volume(): number {
            return this._volume;
        }

        set volume(x: number) {
            if (x > 0 && x < 11) {
                this._volume = x;
            } else {
                this._volume = Math.floor((Math.random() * 10)+1);
            }
        }

        constructor(c: string, v: number) {
            this.color = c;
            this._volume = v;
        }

        on(): String {
            return 'on';
        }

        off(): String {
            return 'off';
        }

        sound(): String {
            return 'sound';
        }
    }

    function main() {
        let speaker1 = new Speaker('blue', 9);
        let speaker2 = new Speaker('blue', 10);
        let element = <HTMLInputElement>document.getElementById('ex1');
        element.innerHTML += `<u>exercise 1</u> <br> ${speaker1.on()} <br> ${speaker1.off()} <br> ${speaker1.sound()}`;
    }
    main();
})();

//-------------ex2-------------
(function () {
    class FlashLight {
        _color: string;
        _length: number;
        _lightVolume: number;
        _numOfBatteries: number;

        get length(): number {
            return this._length;
        }

        set length(x: number) {
            if (x >= 0) {
                this._length = x;
            } else {
                this._length = Math.abs(x);
            }
        }

        get lightVolume(): number {
            return this._lightVolume;
        }
        set lightVolume(x: number) {
            if (x >= 0) {
                this._lightVolume = x;
            } else {
                this._lightVolume = Math.abs(x);
            }
        }

        get numOfBatteries(): number {
            return this._numOfBatteries;
        }
        set numOfBatteries(x: number) {
            if (x > 0 && x <= 4) {
                this._numOfBatteries = x;
            } else {
                this._numOfBatteries = Math.floor((Math.random() * 4) +1);
            }
        }

        on(): String {
            return 'on';
        }

        off(): String {
            return 'off';
        }

        changeBatteries(): String {
            return 'changeBatteries';
        }

        constructor(c: string, len: number, light: number, battery: number) {
            this._color = c;
            this._length = len;
            this._lightVolume = light;
            this._numOfBatteries = battery;
        }
    }


    function main() {
        let flashLight1 = new FlashLight('green', 4, 5, 2);
        let flashLight2 = new FlashLight('white', 1, 2, 3);
        let element = <HTMLInputElement>document.getElementById('ex2');
        element.innerHTML += `<br> <u>exercise 2</u> <br> <b>flashLight1 1</b> <br> ${flashLight1.on()} 
        <br> ${flashLight1.off()} <br> ${flashLight1.changeBatteries()} <br> <b>flashLight1 2</b> <br> 
        ${flashLight2.on()} <br> ${flashLight2.off()} <br> ${flashLight2.changeBatteries()}`;
    }
    main();

}());

// ----------ex3--------------

(function () {
    class Chair {
        material: string;
        _color: string;
        _length: number;
        _width: number;
        _height: number;

        get color(): string {
            return this._color;
        }

        set color(x: string) {
            console.log(x);
            var that = this;
            var m = 0;
            let colorsArray = ['Black', 'White', 'Red', 'Green', 'Blue'];
            colorsArray.forEach(function (element) {
                m++;
                if (x == element) {
                    that._color = x;
                    debugger;
                } else if (m == colorsArray.length) {
                    that._color = 'color must be black, white, red, green or blue';
                }
            });
        }

        get length(): number {
            return Math.abs(this._length);
        }

        set length(x: number) {
            if (x >= 0) {
                this._length = x;
            } else {
                this._length = Math.abs(x);
            }
        }

        get width(): number {
            return Math.abs(this._width);
        }
        set width(x: number) {
            if (x >= 0) {
                this._width = x;
            } else {
                this._width = Math.abs(x);
            }
        }

        get height(): number {
            return Math.abs(this._height);
        }

        set height(x: number) {
            if (x >= 0) {
                this._height = x;
            } else {
                this._height = Math.abs(x);
            }
        }

        volume(): number {
            return this._length * this._width * this._height;
        }

        constructor(m: string, c: string, l: number, w: number, h: number) {
            this.material = m;
            this._color = c;
            this._length = l;
            this._width = w;
            this._height = h;
        }
    }

    function main() {
        let chair1 = new Chair('material', 'white', 2, 2, 2);
        let element = <HTMLInputElement>document.getElementById('ex3');
        element.innerHTML += `<br><u>exercise 3</u><br>${chair1.material} <br> ${chair1._color} <br> ${chair1._length}
         <br> ${chair1._width} <br> ${chair1._height}<br>${chair1.volume()}`;
    }
    main();
})();