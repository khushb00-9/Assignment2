// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018

namespace managers {
  export class Collision {
    public static check(
      object1: objects.GameObject,
      object2: objects.GameObject
    ) {
      let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
      let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

      if (
        math.Vec2.Distance(P1, P2) <
        object1.halfHeight + object2.halfHeight
      ) {
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
      } else {
        object2.isColliding = false;
      }
    }
  }
}
