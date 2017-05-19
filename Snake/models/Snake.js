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
var GameModels;
(function (GameModels) {
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(game, x, y) {
            var _this = _super.call(this, game, x, y) || this;
            _this.snakeBody = [];
            _this.snakePath = [];
            _this.numSnakeSections = 5;
            _this.snakeSpacer = 8;
            _this.group = _this.game.add.group();
            _this.snakeHead = _this.game.add.sprite(x, y, "snakeBody");
            _this.snakeHead.anchor.setTo(0.5, 0.5);
            _this.game.physics.arcade.enable(_this.snakeHead);
            _this.group.add(_this.snakeHead);
            for (var index = 0; index < _this.numSnakeSections; index++) {
                _this.snakeBody[index] = _this.game.add.sprite(x - index * 3, y, "snakeBody");
                _this.snakeBody[index].anchor.setTo(0.5, 0.5);
                _this.game.physics.arcade.enable(_this.snakeBody[index]);
            }
            for (var index = 0; index < _this.numSnakeSections * _this.snakeSpacer; index++) {
                _this.snakePath[index] = new Phaser.Point(400 - index * 3, 300);
            }
            return _this;
        }
        Snake.prototype.addBody = function (game, x, y) {
            this.snakeBody.push(this.game.add.sprite(x, y, "snakeBody"));
            this.numSnakeSections++;
            this.lastX = this.snakeBody[this.numSnakeSections - 1].x;
            this.lastY = this.snakeBody[this.numSnakeSections - 1].y;
            this.snakeBody[this.numSnakeSections - 1].anchor.setTo(0.5, 0.5);
            this.game.physics.arcade.enable(this.snakeBody[this.numSnakeSections - 1]);
            this.group.add(this.snakeBody[this.numSnakeSections - 1]);
            for (var index = 0; index < this.snakeSpacer; index++) {
                this.snakePath.push(new Phaser.Point(this.lastX + index, this.lastY));
            }
        };
        return Snake;
    }(Phaser.Sprite));
    GameModels.Snake = Snake;
})(GameModels || (GameModels = {}));
//# sourceMappingURL=Snake.js.map