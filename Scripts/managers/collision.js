// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018
var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) <
                object1.halfHeight + object2.halfHeight) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "silver_star":
                            createjs.Sound.play("star");
                            managers.Game.ScoreBoard.Score += 100;
                            break;
                        case "wheel":
                            createjs.Sound.play("crash");
                            managers.Game.ScoreBoard.Lives -= 1;
                            break;
                        case "gold_star":
                            createjs.Sound.play("star");
                            managers.Game.ScoreBoard.Score += 500;
                            break;
                        case "shooting_star":
                            createjs.Sound.play("bonus_sound");
                            managers.Game.ScoreBoard.Score += 1000;
                            break;
                        case "bonus_star":
                            createjs.Sound.play("bonus_sound");
                            managers.Game.ScoreBoard.Lives += 1;
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map