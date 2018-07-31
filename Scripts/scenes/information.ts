// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018

namespace scenes {
  export class Information extends objects.Scene {
    // member variables
    private engineSound: createjs.AbstractSoundInstance;

    private _infoLabel: objects.Label;
    private _infoLabel1: objects.Label;
    private _infoLabel2: objects.Label;
    private _ocean: objects.Background;
    private _backButton: objects.Button;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this.engineSound = createjs.Sound.play("main_sound");

      this._backButton = new objects.Button("returnButton", 500, 500, true);
      this._infoLabel = new objects.Label(
        "Milky Way",
        "60px",
        "FFF_Tusj",
        "#0000ff",
        config.Screen.HALF_WIDTH,
        120,
        true
      );
      this._infoLabel1 = new objects.Label(
        "\n Instructions :",
        "30px",
        "Consolas",
        "#FAD4CC",
        600,
        220,
        true
      );
      this._infoLabel2 = new objects.Label(
        "\n Move the boat up and down with the help of mouse! \n\n Get points by collecting silver and gold stars! \n\n Catch a shooting star in order to get bonus points! \n\n Find a blue star for lives!",
        "24px",
        "Consolas",
        "#EFF5A2",
        650,
        320,
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
      console.log(`Starting - Information SCENE`);
      this.addChild(this._ocean);
      this.addChild(this._backButton);
      this.addChild(this._infoLabel);
      this.addChild(this._infoLabel1);
      this.addChild(this._infoLabel2);

      this._backButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.START;
          let button = createjs.Sound.play("button");
        },
        this
      );
    }
  }
}
