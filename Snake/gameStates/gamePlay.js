var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameStates;
(function (GameStates) {
    var gamePlay = (function (_super) {
        __extends(gamePlay, _super);
        function gamePlay() {
            var _this = _super.call(this) || this;
            _this.updateDalay = 0;
            _this.direction = "right";
            _this.newDirection = null;
            _this.addNew = false;
            return _this;
        }
        gamePlay.prototype.create = function () {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.sprite(0, 0, "game-pad");
            this.snake = new GameModels.Snake(this.game, 400, 300);
            this.score = 0;
            this.speed = 0;
            var textStyleKey = { font: "bold 14px sans-serif", fill: "#134f01", align: "center" };
            var textStyleValue = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };
            // Score.
            this.game.add.text(30, 20, "SCORE", textStyleKey);
            var scoreTextValue = this.game.add.text(90, 18, this.score.toString(), textStyleValue);
            // Speed.
            this.game.add.text(695, 20, "SPEED", textStyleKey);
            var speedTextValue = this.game.add.text(750, 18, this.speed.toString(), textStyleValue);
            var cursors = this.game.input.keyboard.createCursorKeys();
            this.generateApple();
        };
        gamePlay.prototype.update = function () {
        };
        gamePlay.prototype.generateApple = function () {
            // Chose a random place on the grid.
            var randomX = Math.floor(Math.random() * 39) * 15 + 15, randomY = Math.floor(Math.random() * 29) * 15 + 15;
            // Add a new apple.
            this.apple = new GameModels.Apple(this.game, randomX, randomY);
        };
        return gamePlay;
    }(Phaser.State));
    GameStates.gamePlay = gamePlay;
})(GameStates || (GameStates = {}));
//# sourceMappingURL=gamePlay.js.map