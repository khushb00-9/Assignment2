// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018

namespace objects {
  export class Background extends createjs.Bitmap {
    // member variables
    private _horizontalSpeed: number;

    /**
     * Creates an instance of Background.
     * @memberof Background
     */
    constructor() {
      super(managers.Game.AssetManager.getResult("background"));

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check top boundary
      if (this.x <= -1200) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this._horizontalSpeed = 6; // 5 pixels per frame
      this.Reset();
    }

    public Update(): void {
      this.x -= this._horizontalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this.x = 0;
    }
  }
}
