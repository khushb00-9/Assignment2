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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildstars = function () {
            for (var count = 0; count < this._starNum; count++) {
                this._star.push(new objects.Star());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        Play.prototype._buildGoldStars = function () {
            for (var count = 0; count < this._goldStarNum; count++) {
                this._goldStar.push(new objects.GoldStar());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        Play.prototype._buildShootingStars = function () {
            for (var count = 0; count < this._shootingStarNum; count++) {
                this._shootingStar.push(new objects.ShootingStar());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        Play.prototype._buildBonusStars = function () {
            for (var count = 0; count < this._bonusNum; count++) {
                this._bonusStar.push(new objects.BonusStar());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        Play.prototype._wheels = function () {
            for (var count = 0; count < this._wheelNum; count++) {
                this._wheel.push(new objects.Wheel());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("game_sound");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._boat = new objects.Boat();
            this._ocean = new objects.Background();
            this._quitButton = new objects.Button("quitButton", 500, 550, true);
            // creates an empty array of type Cloud
            this._star = new Array();
            this._starNum = 4;
            this._goldStar = new Array();
            this._goldStarNum = 3;
            this._shootingStar = new Array();
            this._shootingStarNum = 1;
            this._bonusStar = new Array();
            this._bonusNum = 1;
            this._wheel = new Array();
            this._wheelNum = 3;
            this._buildstars();
            this._buildGoldStars();
            this._buildShootingStars();
            this._wheels();
            this._buildBonusStars();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._ocean.Update();
            this._boat.Update();
            //this._bonusStar.Update();
            //managers.Collision.check(this._boat, this._bonusStar);
            this._bonusStar.forEach(function (star) {
                star.Update();
                if (managers.Collision.check(_this._boat, star)) {
                    console.log("collision");
                }
            });
            this._star.forEach(function (star) {
                star.Update();
                if (managers.Collision.check(_this._boat, star)) {
                    console.log("collision");
                }
            });
            this._goldStar.forEach(function (star) {
                star.Update();
                if (managers.Collision.check(_this._boat, star)) {
                    console.log("collision");
                }
            });
            this._shootingStar.forEach(function (star) {
                star.Update();
                if (managers.Collision.check(_this._boat, star)) {
                    console.log("collision");
                }
            });
            this._wheel.forEach(function (wheel) {
                wheel.Update();
                if (managers.Collision.check(_this._boat, wheel)) {
                    console.log("collision");
                }
            });
        };
        Play.prototype.Reset = function () { };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the ocean to the scene
            this.addChild(this._ocean);
            for (var _i = 0, _a = this._star; _i < _a.length; _i++) {
                var star = _a[_i];
                this.addChild(star);
            }
            for (var _b = 0, _c = this._goldStar; _b < _c.length; _b++) {
                var star = _c[_b];
                this.addChild(star);
            }
            for (var _d = 0, _e = this._shootingStar; _d < _e.length; _d++) {
                var star = _e[_d];
                this.addChild(star);
            }
            for (var _f = 0, _g = this._wheel; _f < _g.length; _f++) {
                var wheel = _g[_f];
                this.addChild(wheel);
            }
            for (var _h = 0, _j = this._bonusStar; _h < _j.length; _h++) {
                var bonus = _j[_h];
                this.addChild(bonus);
            }
            this.addChild(this._boat);
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(this._quitButton);
            this._quitButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
                var buttonSound = createjs.Sound.play("button");
            }, this);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map