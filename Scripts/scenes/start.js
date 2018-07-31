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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("main_sound");
            this._gameNameLabel = new objects.Label("Milky Way", "60px", "FFF_Tusj", "#A0F5EE", 610, 120, true);
            this._name = new objects.Label("~ Khushboo Sakervala ", "40px", "AlexBrush-Regular", "#EDC4EE", 600, 240, true);
            this._startButton = new objects.Button("startButton", 470, 360, true);
            this._settingButton = new objects.Button("settingButton", 810, 500, true);
            this._informationButton = new objects.Button("infoButton", 100, 500, true);
            this._ocean = new objects.Background();
            this.Main();
        };
        Start.prototype.Update = function () {
            this._ocean.Update();
        };
        Start.prototype.Reset = function () { };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Started - START SCENE");
            this.addChild(this._ocean);
            this.addChild(this._gameNameLabel);
            this.addChild(this._name);
            this.addChild(this._settingButton);
            this.addChild(this._informationButton);
            this.addChild(this._startButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
                var buttonSound = createjs.Sound.play("button");
            }, this);
            this._settingButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.SETTING;
                var buttonSound = createjs.Sound.play("button");
            }, this);
            this._informationButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.INFORMATION;
                var buttonSound = createjs.Sound.play("button");
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map