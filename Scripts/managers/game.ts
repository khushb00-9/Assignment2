// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018

namespace managers {
  export class Game {
    public static AssetManager: createjs.LoadQueue;
    public static CurrentScene: objects.Scene;
    public static CurrentState: config.Scene;
    public static Stage: createjs.Stage;
    public static ScoreBoard: managers.ScoreBoard;
  }
}
