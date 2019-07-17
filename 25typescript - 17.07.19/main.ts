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
            }else{
                this._volume = 0;
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
        let speaker1 = new Speaker('blue', 11);
        let speaker2 = new Speaker('blue', 10);
        let element = <HTMLInputElement>document.getElementById('ex1');
        element.innerHTML += `<u>exercise 1</u> <br> ${speaker1.on()} <br> ${speaker1.off()} <br> ${speaker1.sound()}`;
    }
    main();
})();

//-------------ex2-------------
(function () {

}());

//----------ex3--------------

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
            let colorsArray = ['Black', 'White', 'Red', 'Green', 'Blue'];
            colorsArray.forEach(function (element) {
                //console.log(element);
                if (x == element) {
                    that._color = x;
                } else {
                    that._color = '';
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
        let chair1 = new Chair('material', 'purple', 2, 2, 2);
        let element = <HTMLInputElement>document.getElementById('ex2');
        element.innerHTML += `<br><u>exercise 3</u><br>${chair1.material} <br> ${chair1._color} <br> ${chair1._length}
         <br> ${chair1._width} <br> ${chair1._height}<br>${chair1.volume()}`;
    }
    main();
})();