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
    var Star = /** @class */ (function (_super) {
        __extends(Star, _super);
        /**
         * Creates an instance of Silver Star.
         * @memberof Star
         */
        function Star() {
            var _this = _super.call(this, "silver_star") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Star.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x < this.halfWidth) {
                this.Reset();
            }
        };
        // public methods
        Star.prototype.Start = function () {
            this.regX = this.width;
            this.regY = this.height;
            this.Reset();
        };
        Star.prototype.Update = function () {
            //this.y += this._verticalSpeed;
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Star.prototype.Reset = function () {
            //this._verticalSpeed =  Math.floor((Math.random() * 5) + 5); // between 5 and 10 ppf
            this._horizontalSpeed = Math.floor(Math.random() * 4 + 2); // between -2 and 2 ppf
            this.x = config.Screen.WIDTH;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height) + this.halfHeight);
            console.log(this._horizontalSpeed);
        };
        return Star;
    }(objects.GameObject));
    objects.Star = Star;
})(objects || (objects = {}));
//# sourceMappingURL=star.js.map