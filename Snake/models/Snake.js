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
            _this.numSnakeSection = 10;
            _this.snakeSpacer = 6;
            _this.group = _this.game.add.group();
            _this.snakeHead = _this.game.add.sprite(x, y, "snakeBody");
            _this.snakeHead.anchor.setTo(0.5, 0.5);
            _this.game.physics.arcade.enable(_this.snakeHead);
            _this.group.add(_this.snakeHead);
            for (var index = 0; index < _this.numSnakeSection; index++) {
                _this.snakeBody[index] = _this.game.add.sprite(x + index * 20 + 20, y, "snakeBody");
                _this.snakeBody[index].anchor.setTo(0.5, 0.5);
                _this.game.physics.arcade.enable(_this.snakeBody[index]);
            }
            for (var i = 0; i < _this.numSnakeSection * _this.snakeSpacer; i++) {
                _this.snakePath[i] = new Phaser.Point(400, 300);
            }
            return _this;
        }
        return Snake;
    }(Phaser.Sprite));
    GameModels.Snake = Snake;
})(GameModels || (GameModels = {}));
//# sourceMappingURL=Snake.js.map