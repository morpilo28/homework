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
                    this._volume = 0;
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
        var speaker1 = new Speaker('blue', 11);
        var speaker2 = new Speaker('blue', 10);
        var element = document.getElementById('ex1');
        element.innerHTML += "<u>exercise 1</u> <br> " + speaker1.on() + " <br> " + speaker1.off() + " <br> " + speaker1.sound();
    }
    main();
})();
//-------------ex2-------------
(function () {
}());
//----------ex3--------------
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
                var colorsArray = ['Black', 'White', 'Red', 'Green', 'Blue'];
                colorsArray.forEach(function (element) {
                    //console.log(element);
                    if (x == element) {
                        that._color = x;
                    }
                    else {
                        that._color = '';
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
        var chair1 = new Chair('material', 'purple', 2, 2, 2);
        var element = document.getElementById('ex2');
        element.innerHTML += "<br><u>exercise 3</u><br>" + chair1.material + " <br> " + chair1._color + " <br> " + chair1._length + "\n         <br> " + chair1._width + " <br> " + chair1._height + "<br>" + chair1.volume();
    }
    main();
})();
