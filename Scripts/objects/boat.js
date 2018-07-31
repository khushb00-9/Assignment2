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
    var Boat = /** @class */ (function (_super) {
        __extends(Boat, _super);
        /**
         * Creates an instance of Boat.
         * @memberof Boat
         */
        function Boat() {
            var _this = _super.call(this, "boat") || this;
            console.log(_this.width + " " + _this.height);
            _this.Start();
            return _this;
        }
        // private methods
        Boat.prototype._checkBounds = function () {
            // check right boundary
            if (this.y > config.Screen.HEIGHT - this.halfHeight) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
            // check left boundary
            if (this.y < this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        // public methods
        Boat.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 430;
        };
        Boat.prototype.Update = function () {
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
        };
        Boat.prototype.Reset = function () { };
        return Boat;
    }(objects.GameObject));
    objects.Boat = Boat;
})(objects || (objects = {}));
//# sourceMappingURL=boat.js.map