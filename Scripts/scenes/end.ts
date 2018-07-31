// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018

namespace scenes {
  export class End extends objects.Scene {
    // member variables
    private engineSound: createjs.AbstractSoundInstance;

    private _endLabel: objects.Label;
    private _backButton: objects.Button;
    private _ocean: objects.Background;
    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this.engineSound = createjs.Sound.play("main_sound");

      this._endLabel = new objects.Label(
        "Game Over!",
        "60px",
        "Consolas",
        "#A2F5E9",
        600,
        200,
        true
      );
      this._backButton = new objects.Button("returnButton", 450, 400, true);
      this._ocean = new objects.Background();
      this.Main();
    }

    public Update(): void {}

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log("Started - END SCENE");
      this.addChild(this._ocean);
      this.addChild(this._endLabel);
      this.addChild(this._backButton);
      this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
      this._backButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.START;
        },
        this
      );
    }
  }
}
