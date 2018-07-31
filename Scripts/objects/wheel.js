// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018
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
var objects;
(function (objects) {
    var Wheel = /** @class */ (function (_super) {
        __extends(Wheel, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Wheel
         */
        function Wheel() {
            var _this = _super.call(this, "wheel") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Wheel.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x < this.halfWidth) {
                this.Reset();
            }
        };
        // public methods
        Wheel.prototype.Start = function () {
            this.regX = this.width;
            this.regY = this.height;
            this._horizontalSpeed = 5;
            this.Reset();
        };
        Wheel.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Wheel.prototype.Reset = function () {
            this.x = 1200;
            this.y = Math.floor(Math.random() * (900 - this.height) + this.halfHeight);
        };
        return Wheel;
    }(objects.GameObject));
    objects.Wheel = Wheel;
})(objects || (objects = {}));
//# sourceMappingURL=wheel.js.map