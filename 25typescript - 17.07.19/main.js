'use strict';
// -------------ex1------------
(function () {
    var Speaker = /** @class */ (function () {
        function Speaker(c, v) {
            this.color = c;
            this._volume = v;
        }
        Object.defineProperty(Speaker.prototype, "volume", {
            get: function () {
                return this._volume;
            },
            set: function (x) {
                if (x > 0 && x < 11) {
                    this._volume = x;
                }
                else {
                    this._volume = Math.floor((Math.random() * 10) + 1);
                }
            },
            enumerable: true,
            configurable: true
        });
        Speaker.prototype.on = function () {
            return 'on';
        };
        Speaker.prototype.off = function () {
            return 'off';
        };
        Speaker.prototype.sound = function () {
            return 'sound';
        };
        return Speaker;
    }());
    function main() {
        var speaker1 = new Speaker('blue', 9);
        var speaker2 = new Speaker('blue', 10);
        var element = document.getElementById('ex1');
        element.innerHTML += "<u>exercise 1</u> <br> " + speaker1.on() + " <br> " + speaker1.off() + " <br> " + speaker1.sound();
    }
    main();
})();
//-------------ex2-------------
(function () {
    var FlashLight = /** @class */ (function () {
        function FlashLight(c, len, light, battery) {
            this._color = c;
            this._length = len;
            this._lightVolume = light;
            this._numOfBatteries = battery;
        }
        Object.defineProperty(FlashLight.prototype, "length", {
            get: function () {
                return this._length;
            },
            set: function (x) {
                if (x >= 0) {
                    this._length = x;
                }
                else {
                    this._length = Math.abs(x);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FlashLight.prototype, "lightVolume", {
            get: function () {
                return this._lightVolume;
            },
            set: function (x) {
                if (x >= 0) {
                    this._lightVolume = x;
                }
                else {
                    this._lightVolume = Math.abs(x);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FlashLight.prototype, "numOfBatteries", {
            get: function () {
                return this._numOfBatteries;
            },
            set: function (x) {
                if (x > 0 && x <= 4) {
                    this._numOfBatteries = x;
                }
                else {
                    this._numOfBatteries = Math.floor((Math.random() * 4) + 1);
                }
            },
            enumerable: true,
            configurable: true
        });
        FlashLight.prototype.on = function () {
            return 'on';
        };
        FlashLight.prototype.off = function () {
            return 'off';
        };
        FlashLight.prototype.changeBatteries = function () {
            return 'changeBatteries';
        };
        return FlashLight;
    }());
    function main() {
        var flashLight1 = new FlashLight('green', 4, 5, 2);
        var flashLight2 = new FlashLight('white', 1, 2, 3);
        var element = document.getElementById('ex2');
        element.innerHTML += "<br> <u>exercise 2</u> <br> <b>flashLight1 1</b> <br> " + flashLight1.on() + " \n        <br> " + flashLight1.off() + " <br> " + flashLight1.changeBatteries() + " <br> <b>flashLight1 2</b> <br> \n        " + flashLight2.on() + " <br> " + flashLight2.off() + " <br> " + flashLight2.changeBatteries();
    }
    main();
}());
// ----------ex3--------------
(function () {
    var Chair = /** @class */ (function () {
        function Chair(m, c, l, w, h) {
            this.material = m;
            this._color = c;
            this._length = l;
            this._width = w;
            this._height = h;
        }
        Object.defineProperty(Chair.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (x) {
                console.log(x);
                var that = this;
                var m = 0;
                var colorsArray = ['Black', 'White', 'Red', 'Green', 'Blue'];
                colorsArray.forEach(function (element) {
                    m++;
                    if (x == element) {
                        that._color = x;
                        debugger;
                    }
                    else if (m == colorsArray.length) {
                        that._color = 'color must be black, white, red, green or blue';
                    }
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Chair.prototype, "length", {
            get: function () {
                return Math.abs(this._length);
            },
            set: function (x) {
                if (x >= 0) {
                    this._length = x;
                }
                else {
                    this._length = Math.abs(x);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Chair.prototype, "width", {
            get: function () {
                return Math.abs(this._width);
            },
            set: function (x) {
                if (x >= 0) {
                    this._width = x;
                }
                else {
                    this._width = Math.abs(x);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Chair.prototype, "height", {
            get: function () {
                return Math.abs(this._height);
            },
            set: function (x) {
                if (x >= 0) {
                    this._height = x;
                }
                else {
                    this._height = Math.abs(x);
                }
            },
            enumerable: true,
            configurable: true
        });
        Chair.prototype.volume = function () {
            return this._length * this._width * this._height;
        };
        return Chair;
    }());
    function main() {
        var chair1 = new Chair('material', 'white', 2, 2, 2);
        var element = document.getElementById('ex3');
        element.innerHTML += "<br><u>exercise 3</u><br>" + chair1.material + " <br> " + chair1._color + " <br> " + chair1._length + "\n         <br> " + chair1._width + " <br> " + chair1._height + "<br>" + chair1.volume();
    }
    main();
})();
