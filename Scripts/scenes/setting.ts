// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018

namespace scenes {
  export class Setting extends objects.Scene {
    // member variables
    private engineSound: createjs.AbstractSoundInstance;

    private _cancleButton: objects.Button;
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

      this._cancleButton = new objects.Button("returnButton", 500, 500, true);
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
      console.log(`Starting - Setting SCENE`);
      this.addChild(this._ocean);
      this.addChild(this._cancleButton);

      this._cancleButton.on(
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
