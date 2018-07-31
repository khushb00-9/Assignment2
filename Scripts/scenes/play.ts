// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018

namespace scenes {
  export class Play extends objects.Scene {
    // member variables

    private _quitButton: objects.Button;

    private _boat: objects.Boat;
    private _ocean: objects.Background;

    private _star: objects.Star[];
    private _starNum: number;

    private _goldStar: objects.GoldStar[];
    private _goldStarNum: number;

    private _shootingStar: objects.ShootingStar[];
    private _shootingStarNum: number;

    private _wheel: objects.Wheel[];
    private _wheelNum: number;

    private _bonusStar: objects.BonusStar[];
    private _bonusNum: number;

    private engineSound: createjs.AbstractSoundInstance;

    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods
    private _buildstars(): void {
      for (let count = 0; count < this._starNum; count++) {
        this._star.push(new objects.Star());
        //this._clouds[count] = new objects.Cloud();
      }
    }

    private _buildGoldStars(): void {
      for (let count = 0; count < this._goldStarNum; count++) {
        this._goldStar.push(new objects.GoldStar());
        //this._clouds[count] = new objects.Cloud();
      }
    }

    private _buildShootingStars(): void {
      for (let count = 0; count < this._shootingStarNum; count++) {
        this._shootingStar.push(new objects.ShootingStar());
        //this._clouds[count] = new objects.Cloud();
      }
    }

    private _buildBonusStars(): void {
      for (let count = 0; count < this._bonusNum; count++) {
        this._bonusStar.push(new objects.BonusStar());
        //this._clouds[count] = new objects.Cloud();
      }
    }

    private _wheels(): void {
      for (let count = 0; count < this._wheelNum; count++) {
        this._wheel.push(new objects.Wheel());
        //this._clouds[count] = new objects.Cloud();
      }
    }

    // public methods
    public Start(): void {
      this.engineSound = createjs.Sound.play("game_sound");

      this.engineSound.loop = -1;
      this.engineSound.volume = 0.1;

      this._boat = new objects.Boat();
      this._ocean = new objects.Background();
      this._quitButton = new objects.Button("quitButton", 500, 550, true);

      // creates an empty array of type Cloud

      this._star = new Array<objects.Star>();
      this._starNum = 4;

      this._goldStar = new Array<objects.GoldStar>();
      this._goldStarNum = 3;

      this._shootingStar = new Array<objects.ShootingStar>();
      this._shootingStarNum = 1;

      this._bonusStar = new Array<objects.BonusStar>();
      this._bonusNum = 1;

      this._wheel = new Array<objects.Wheel>();
      this._wheelNum = 3;

      this._buildstars();
      this._buildGoldStars();
      this._buildShootingStars();
      this._wheels();
      this._buildBonusStars();

      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
      this._boat.Update();

      //this._bonusStar.Update();
      //managers.Collision.check(this._boat, this._bonusStar);
      this._bonusStar.forEach(star => {
        star.Update();
        if (managers.Collision.check(this._boat, star)) {
          console.log("collision");
        }
      });

      this._star.forEach(star => {
        star.Update();
        if (managers.Collision.check(this._boat, star)) {
          console.log("collision");
        }
      });

      this._goldStar.forEach(star => {
        star.Update();
        if (managers.Collision.check(this._boat, star)) {
          console.log("collision");
        }
      });

      this._shootingStar.forEach(star => {
        star.Update();
        if (managers.Collision.check(this._boat, star)) {
          console.log("collision");
        }
      });

      this._wheel.forEach(wheel => {
        wheel.Update();
        if (managers.Collision.check(this._boat, wheel)) {
          console.log("collision");
        }
      });
    }

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - PLAY SCENE`);

      // adding the ocean to the scene
      this.addChild(this._ocean);

      for (const star of this._star) {
        this.addChild(star);
      }

      for (const star of this._goldStar) {
        this.addChild(star);
      }

      for (const star of this._shootingStar) {
        this.addChild(star);
      }

      for (const wheel of this._wheel) {
        this.addChild(wheel);
      }

      for (const bonus of this._bonusStar) {
        this.addChild(bonus);
      }
      this.addChild(this._boat);
      this.addChild(managers.Game.ScoreBoard.LivesLabel);
      this.addChild(managers.Game.ScoreBoard.ScoreLabel);

      this.addChild(this._quitButton);

      this._quitButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.START;
          let buttonSound = createjs.Sound.play("button");
        },
        this
      );
    }
  }
}
