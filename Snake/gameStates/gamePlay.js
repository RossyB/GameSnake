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
            return _super.call(this) || this;
        }
        gamePlay.prototype.create = function () {
            this.updateDelay = 0;
            this.direction = "right";
            this.newDirection = null;
            this.addNew = false;
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.sprite(0, 0, "game-pad");
            this.snake = new GameModels.Snake(this.game, 400, 300);
            this.score = 0;
            this.speed = 0;
            var textStyleKey = { font: "bold 14px sans-serif", fill: "#134f01", align: "center" };
            var textStyleValue = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };
            // Score.
            this.game.add.text(30, 20, "SCORE", textStyleKey);
            this.scoreTextValue = this.game.add.text(90, 18, this.score.toString(), textStyleValue);
            // Speed.
            this.game.add.text(695, 20, "SPEED", textStyleKey);
            this.speedTextValue = this.game.add.text(750, 18, this.speed.toString(), textStyleValue);
            this.cursors = this.game.input.keyboard.createCursorKeys();
            this.generateApple();
        };
        gamePlay.prototype.update = function () {
            this.snake.snakeHead.body.velocity.setTo(0, 0);
            this.snake.snakeHead.body.angularVelocity = 0;
            var snakeVelocity = 150;
            if (this.cursors.right.isDown && this.direction != 'left') {
                this.newDirection = 'right';
            }
            else if (this.cursors.left.isDown && this.direction != 'right') {
                this.newDirection = 'left';
            }
            else if (this.cursors.up.isDown && this.direction != 'down') {
                this.newDirection = 'up';
            }
            else if (this.cursors.down.isDown && this.direction != 'up') {
                this.newDirection = 'down';
            }
            // A formula to calculate game speed based on the score.
            this.speed = Math.min(10, Math.floor(this.score / 5));
            // Update speed value on game screen.
            this.speedTextValue.text = '' + this.speed;
            // Increase a counter on every update call.
            this.updateDelay++;
            // Do game stuff only if the counter is aliquot to (10 - the game speed).
            // The higher the speed, the more frequently this is fulfilled,
            // making the snake move faster.
            if (this.updateDelay % (10 - this.speed) == 0) {
                // If a new direction has been chosen from the keyboard, make it the direction of the snake now.
                if (this.newDirection) {
                    this.direction = this.newDirection;
                    this.newDirection = null;
                }
            }
            if (this.direction === 'left') {
                this.snake.snakeHead.body.velocity.x -= snakeVelocity;
                var part = this.snake.snakePath.pop();
                part.setTo(this.snake.snakeHead.x, this.snake.snakeHead.y);
                this.snake.snakePath.unshift(part);
                for (var i = 0; i < this.snake.snakeBody.length; i++) {
                    this.snake.snakeBody[i].x = (this.snake.snakePath[i * this.snake.snakeSpacer]).x;
                    this.snake.snakeBody[i].y = (this.snake.snakePath[i * this.snake.snakeSpacer]).y;
                    this.snake.snakeBody[i].frame = 3;
                }
            }
            else if (this.direction === 'right') {
                this.snake.snakeHead.body.velocity.x += snakeVelocity;
                var part = this.snake.snakePath.pop();
                part.setTo(this.snake.snakeHead.x, this.snake.snakeHead.y);
                this.snake.snakePath.unshift(part);
                for (var i = 0; i < this.snake.snakeBody.length; i++) {
                    this.snake.snakeBody[i].x = (this.snake.snakePath[i * this.snake.snakeSpacer]).x;
                    this.snake.snakeBody[i].y = (this.snake.snakePath[i * this.snake.snakeSpacer]).y;
                    this.snake.snakeBody[i].frame = 3;
                }
            }
            else if (this.direction === 'up') {
                this.snake.snakeHead.body.velocity.y -= snakeVelocity;
                var part = this.snake.snakePath.pop();
                part.setTo(this.snake.snakeHead.x, this.snake.snakeHead.y);
                this.snake.snakePath.unshift(part);
                for (var i = 0; i < this.snake.snakeBody.length; i++) {
                    this.snake.snakeBody[i].x = (this.snake.snakePath[i * this.snake.snakeSpacer]).x;
                    this.snake.snakeBody[i].y = (this.snake.snakePath[i * this.snake.snakeSpacer]).y;
                    this.snake.snakeBody[i].frame = 3;
                }
            }
            else if (this.direction == 'down') {
                this.snake.snakeHead.body.velocity.y += snakeVelocity;
                var part = this.snake.snakePath.pop();
                part.setTo(this.snake.snakeHead.x, this.snake.snakeHead.y);
                this.snake.snakePath.unshift(part);
                for (var i = 0; i < this.snake.snakeBody.length; i++) {
                    this.snake.snakeBody[i].x = (this.snake.snakePath[i * this.snake.snakeSpacer]).x;
                    this.snake.snakeBody[i].y = (this.snake.snakePath[i * this.snake.snakeSpacer]).y;
                    this.snake.snakeBody[i].frame = 3;
                }
            }
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