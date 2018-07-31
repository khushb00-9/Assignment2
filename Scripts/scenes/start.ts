// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018

namespace scenes {
  export class Start extends objects.Scene {
    // member variables

    private _gameNameLabel: objects.Label;
    private _name: objects.Label;
    private _startButton: objects.Button;
    private _settingButton: objects.Button;
    private _informationButton: objects.Button;
    private _ocean: objects.Background;

    private engineSound: createjs.AbstractSoundInstance;
    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this.engineSound = createjs.Sound.play("main_sound");

      this._gameNameLabel = new objects.Label(
        "Milky Way",
        "60px",
        "FFF_Tusj",
        "#A0F5EE",
        610,
        120,
        true
      );
      this._name = new objects.Label(
        "~ Khushboo Sakervala ",
        "40px",
        "AlexBrush-Regular",
        "#EDC4EE",
        600,
        240,
        true
      );
      this._startButton = new objects.Button("startButton", 470, 360, true);
      this._settingButton = new objects.Button("settingButton", 810, 500, true);
      this._informationButton = new objects.Button(
        "infoButton",
        100,
        500,
        true
      );
      this._ocean = new objects.Background();
      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log("Started - START SCENE");
      this.addChild(this._ocean);
      this.addChild(this._gameNameLabel);
      this.addChild(this._name);
      this.addChild(this._settingButton);
      this.addChild(this._informationButton);
      this.addChild(this._startButton);

      this._startButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.PLAY;
          let buttonSound = createjs.Sound.play("button");
        },
        this
      );

      this._settingButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.SETTING;
          let buttonSound = createjs.Sound.play("button");
        },
        this
      );

      this._informationButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.INFORMATION;
          let buttonSound = createjs.Sound.play("button");
        },
        this
      );
    }
  }
}
