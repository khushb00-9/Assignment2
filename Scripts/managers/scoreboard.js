// Author's Name : Khushboo Sakervala
// Student Id : 300984318
// Last Modified By:  Khushboo Sakervala
// Date Modified : 30-7-2018
var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructors
        function ScoreBoard() {
            this.Start();
        }
        Object.defineProperty(ScoreBoard.prototype, "LivesLabel", {
            // public properties
            /**
             * This returns a reference to the LivesLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._livesLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "ScoreLabel", {
            /**
             * This returns a reference to the ScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             * @memberof ScoreBoard
             */
            get: function () {
                return this._scoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScoreLabel", {
            /**
             * This returns a reference to the HighScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._highScoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newValue) {
                this._lives = newValue;
                if (this._lives <= 0) {
                    managers.Game.CurrentState = config.Scene.END;
                }
                else {
                    this.LivesLabel.text = "Lives: " + this._lives;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (newValue) {
                this._highScore = newValue;
                this.HighScoreLabel.text = "High Score: " + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (newValue) {
                this._score = newValue;
                this.ScoreLabel.text = "Score: " + this._score;
                if (this._score > this.HighScore) {
                    this.HighScore = this._score;
                }
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        ScoreBoard.prototype.Start = function () {
            this._livesLabel = new objects.Label("Lives: 99", "35px", "Consolas", "#FFFF00", 100, 30, false);
            this._scoreLabel = new objects.Label("Score: 99999", "35px", "Consolas", "#FFFF00", 900, 30, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "45px", "Consolas", "#BCBFF2", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this.Reset();
            this.HighScore = 0;
        };
        ScoreBoard.prototype.Reset = function () {
            this.Lives = 5;
            this.Score = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map