// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018

namespace objects {
  export class Boat extends objects.GameObject {
    /**
     * Creates an instance of Boat.
     * @memberof Boat
     */
    constructor() {
      super("boat");
      console.log(this.width + " " + this.height);
      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check right boundary
      if (this.y > config.Screen.HEIGHT - this.halfHeight) {
        this.y = config.Screen.HEIGHT - this.halfHeight;
      }

      // check left boundary
      if (this.y < this.halfHeight) {
        this.y = this.halfHeight;
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this.y = 430;
    }

    public Update(): void {
      this.y = managers.Game.Stage.mouseY;
      this._checkBounds();
    }

    public Reset(): void {}
  }
}
