// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018

namespace objects {
  export class Wheel extends objects.GameObject {
    // member variables
    private _horizontalSpeed: number;

    /**
     * Creates an instance of Plane.
     * @memberof Wheel
     */
    constructor() {
      super("wheel");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.x < this.halfWidth) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.width;
      this.regY = this.height;
      this._horizontalSpeed = 5;
      this.Reset();
    }

    public Update(): void {
      this.x -= this._horizontalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this.x = 1200;
      this.y = Math.floor(
        Math.random() * (900 - this.height) + this.halfHeight
      );
    }
  }
}
