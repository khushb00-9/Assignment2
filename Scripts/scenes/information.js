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
    var Information = /** @class */ (function (_super) {
        __extends(Information, _super);
        // constructors
        function Information() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Information.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("main_sound");
            this._backButton = new objects.Button("returnButton", 500, 500, true);
            this._infoLabel = new objects.Label("Milky Way", "60px", "FFF_Tusj", "#0000ff", config.Screen.HALF_WIDTH, 120, true);
            this._infoLabel1 = new objects.Label("\n Instructions :", "30px", "Consolas", "#FAD4CC", 600, 220, true);
            this._infoLabel2 = new objects.Label("\n Move the boat up and down with the help of mouse! \n\n Get points by collecting silver and gold stars! \n\n Catch a shooting star in order to get bonus points! \n\n Find a blue star for lives!", "24px", "Consolas", "#EFF5A2", 650, 320, true);
            this._ocean = new objects.Background();
            this.Main();
        };
        Information.prototype.Update = function () {
            this._ocean.Update();
        };
        Information.prototype.Reset = function () { };
        Information.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Information.prototype.Main = function () {
            console.log("Starting - Information SCENE");
            this.addChild(this._ocean);
            this.addChild(this._backButton);
            this.addChild(this._infoLabel);
            this.addChild(this._infoLabel1);
            this.addChild(this._infoLabel2);
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
                var button = createjs.Sound.play("button");
            }, this);
        };
        return Information;
    }(objects.Scene));
    scenes.Information = Information;
})(scenes || (scenes = {}));
//# sourceMappingURL=information.js.map